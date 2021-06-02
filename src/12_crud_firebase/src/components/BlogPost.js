import React from 'react';
import API from '../services/index.js';
import Comment from '../services/Komentar/komentar.js';
import { Button, Container, Form, Row, Col, Modal } from 'react-bootstrap';
import { DB } from '../firebase.config';
import firebase from 'firebase/app';

function Komentar(props){
    return(
        <div>
            <hr></hr>
                <Row>
                    <Col>
                        <h6>{props.nama}</h6>
                        <p>{props.komentar}</p>
                    </Col>
                    <Col>
                        <Button variant="outline-danger" onClick={props.hapus} >Delete</Button>
                    </Col>
                </Row>
            <hr></hr>
      </div>
    );
}


function DaftarArtikel(props){
    return(
        <div>
            <hr></hr>
                <Row>
                    <Col>
                        <h3>{props.judul}</h3>
                        <div>{props.isiArtikel}</div>
                    </Col>
                    {/* <Col>
                        <Button variant="danger" onClick={props.nilai} >Delete</Button>
                    </Col> */}
                </Row>
            <hr></hr>
      </div>
    );
  }
  
export default class BlogPost extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showEdit: false,
            dataArtikel:[], //untuk menampung data API
            postArtikel:{
                id: '',
                userId: firebase.auth().currentUser.email,
                title: '',
                body: ''
            },
            dataKomentar:[],
            postKomentar:{
                userId: firebase.auth().currentUser.email,
                nama: '',
                komentar: ''
            }
        }
    }

    ambilDataDariServerAPI = () => {    
        let ref = DB.ref("articles/");
        ref.on("value", snapshot => {
          if (snapshot.val() !== null)
            this.setState({
              dataArtikel: snapshot.val()
            })
        });
    }

    simpanDataKeServerAPI = () => {
        DB.ref("articles/").set(this.state.dataArtikel);
    }

    ambilDataKomentar = () =>{
        Comment.getKomentar().then(result => {
            this.setState({
                dataKomentar: result
            })
        })
    }

    componentDidMount(){
        this.ambilDataDariServerAPI();
        this.ambilDataKomentar();
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState !== this.state.dataArtikel) {
            this.simpanDataKeServerAPI();
        }
    }

    handleTombolSimpan = (e) => {
        e.preventDefault();
    
        const { dataArtikel, postArtikel } = this.state;
    
        if (postArtikel.id && postArtikel.title && postArtikel.body) {
            const indeksArtikel = dataArtikel.findIndex(data => {
                return data.id === postArtikel.id
            });
            dataArtikel[indeksArtikel].title = postArtikel.title;
            dataArtikel[indeksArtikel].body = postArtikel.body;
            this.setState({ dataArtikel });

        } else if (postArtikel.title && postArtikel.body) {
            console.log(dataArtikel);
            const id = new Date().getTime().toString();
            let userId = firebase.auth().currentUser.email; // TODO: set to username/email
            let title = postArtikel.title;
            let body = postArtikel.body;
            dataArtikel.push({ id, userId, title, body });
            this.setState({ dataArtikel });
        }
    
        postArtikel.id = '';
        postArtikel.title = '';
        postArtikel.body = '';
        this.setState({ postArtikel });
    }
    
    kirimKomentar = (e) => {
        e.preventDefault();
    
        Comment.postKomentar(this.state.postKomentar)
          .then((response) => {
            this.ambilDataKomentar();    // refresh data
            alert('Komentar berhasil dipost!');
          });
    }

    handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState(prevState => {
            prevState.postArtikel[name] = value;
            return {
                postArtikel: prevState.postArtikel
            };
        });
    }
    
    komentarOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState(prevState => {
            prevState.postKomentar[name] = value;
            return {
            postKomentar: prevState.postKomentar
            };
        });
    }

    handleTombolHapus = (e) => {
        e.preventDefault();
    
        const { dataArtikel } = this.state;
    
        const newState = dataArtikel.filter(data => {
          return data.id !== e.target.value;
        });
        
        this.setState({ dataArtikel: newState });
        alert('Data berhasil dihapus!');
    }

    handleTombolEdit = (e) => {
        e.preventDefault();
    
        const { dataArtikel, postArtikel } = this.state;
        
        const updateData = dataArtikel.find(data =>{
            return data.id === e.target.value
        });
        postArtikel.id = new Date().getTime().toString();
        updateData.id = postArtikel.id;
        
        this.setState({postArtikel, showEdit: true });
      }

      handleUpdateArtikel = (e) =>{
        e.preventDefault();
        const { dataArtikel, postArtikel } = this.state;

        if (postArtikel.id !== null) {
            let id = postArtikel.id;
            const updateState = dataArtikel.find(data => {
                return data.id === postArtikel.id
            });
            updateState.userId = firebase.auth().currentUser.email;
            updateState.title = postArtikel.title;
            updateState.body = postArtikel.body;
            console.log(updateState);
            console.log(dataArtikel);
            console.log(postArtikel);
            console.log(e.target);
        }

        postArtikel.id = '';
        postArtikel.title = '';
        postArtikel.body = '';
        this.setState({postArtikel, showEdit: false });
    }

    
    hapusKomentar = (id) =>{

        Comment.deleteKomentar(id)
        .then((response) =>{
            this.ambilDataKomentar();
            alert('Komentar berhasil dihapus');
        })
    }


    render(){
        const { dataArtikel, showEdit, postArtikel } = this.state;

        return (
            <div>
                <Container>
                <Form onSubmit={this.handleTombolSimpan}>
                    <Form.Group controlId="inputJudul">
                    <Form.Label>Judul Artikel</Form.Label>
                    <Form.Control required type="text" name="title" placeholder="judul artikel" onChange={this.handleOnChange} />
                    </Form.Group>
                    <Form.Group controlId="inputIsiArtikel">
                    <Form.Label>Isi Artikel</Form.Label>
                    <Form.Control required name="body" onChange={this.handleOnChange} as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Simpan Artikel
                    </Button>
                </Form>
                </Container>

                <hr />
                <h2>Daftar Artikel</h2>
                {
                (dataArtikel || []).map(artikel => {
                    return (
                    <div key={artikel.id}>
                        <DaftarArtikel judul={artikel.title} isiArtikel={artikel.body} />
                        <Button variant="info" value={artikel.id} onClick={this.handleTombolEdit} >Edit</Button>
                        <Button variant="danger" value={artikel.id} onClick={this.handleTombolHapus}>Hapus</Button>
                        <hr></hr>
                    </div>
                    )
                })
                }
                <Modal
                    show={showEdit}
                    onHide={() => this.setState({ showEdit: false })}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Edit Artikel
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                        <Form onSubmit={this.handleUpdateArtikel}>
                            <Form.Group controlId="inputJudul">
                            <Form.Label>Judul Artikel</Form.Label>
                            <Form.Control required type="text" name="title" value={postArtikel.title} placeholder="judul artikel" onChange={this.handleOnChange} />
                            </Form.Group>
                            <Form.Group controlId="inputIsiArtikel">
                            <Form.Label>Isi Artikel</Form.Label>
                            <Form.Control required name="body" value={postArtikel.body} placeholder="isi artikel" onChange={this.handleOnChange} as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                            Update Artikel
                        </Button>
                        </Form>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => this.setState({ showEdit: false })}>Batal</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );

    }
}
  