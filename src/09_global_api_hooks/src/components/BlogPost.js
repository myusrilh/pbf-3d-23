import React from 'react';
import API from '../services/index.js';
import Comment from '../services/Komentar/komentar.js';
import {Button, Form, Row, Col} from 'react-bootstrap';

function Komentar(props){
    return(
        <div>
            <hr></hr>
                <Row>
                    <Col>
                        <p>{props.nama}</p>
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
                    <Col>
                        <Button variant="danger" onClick={props.nilai} >Delete</Button>
                    </Col>
                </Row>
            <hr></hr>
      </div>
    );
  }
  
export default class BlogPost extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            dataArtikel:[], //untuk menampung data API
            postArtikel:{
                userId: 1,
                title: '',
                body: ''
            },
            dataKomentar:[],
            postKomentar:{
                userId: 1,
                nama: '',
                komentar: ''
            }
        }
    }

    ambilDataDariServerAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                dataArtikel: result
            })
        })
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

    handleTombolSimpan = (e) => {
        e.preventDefault();
    
        API.postNewsBlog(this.state.postArtikel)
          .then((response) => {
            this.ambilDataDariServerAPI();    // refresh data
            alert('Data berhasil disimpan!');
          });
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

    handleOnDelete = (id) =>{

        API.deleteNewsBlog(id)
        .then((response) =>{
            this.ambilDataDariServerAPI();
            alert('Data berhasil dihapus');
        })
    }
    
    hapusKomentar = (id) =>{

        Comment.deleteKomentar(id)
        .then((response) =>{
            this.ambilDataKomentar();
            alert('Komentar berhasil dihapus');
        })
    }


    render(){
        const {dataArtikel, postArtikel, dataKomentar} = this.state;

        return(
                <div>
                    <div>
                        
                            <Form onSubmit={this.handleTombolSimpan}>
                                <Form.Group controlId="formBasicJudulArtikel">
                                    <Form.Label>Judul Artikel:</Form.Label>
                                    <Form.Control type="text" name="title" defaultValue={postArtikel.title} onChange={this.handleOnChange} />
                                </Form.Group>
                                <Form.Group controlId="formBasicIsiArtikel">
                                    <Form.Label>Isi Artikel:</Form.Label>
                                    <Form.Control type="text" name="body" defaultValue={postArtikel.body} onChange={this.handleOnChange} />
                                </Form.Group>
                                <Button variant="primary" type="submit" value="Simpan">Simpan</Button>
                            </Form>
                    </div>
                <hr></hr>
                <h2>Daftar Artikel</h2>
                    {
                        dataArtikel.map(artikel=>{
                        return <DaftarArtikel key={artikel.id} judul={artikel.title} isiArtikel={artikel.body} nilai={() => {this.handleOnDelete(artikel.id)}} />
                        })
                    }
                    <hr></hr>
                    <h5>Komentar</h5>
                        {
                            dataKomentar.map(comment=>{
                                return (
                                <div>
                                    <Komentar key={comment.id} nama={comment.nama} komentar={comment.komentar} hapus={() => {this.hapusKomentar(comment.id)}} />
                                </div>
                                );
                            })
                        }
                        <Form onSubmit={this.kirimKomentar}>
                            <Form.Group controlId="formBasicNama">
                                <Form.Label>Nama:</Form.Label>
                                <Form.Control type="text" name="nama" defaultValue={dataKomentar.nama} onChange={this.komentarOnChange} />
                            </Form.Group>
                            <Form.Group controlId="formBasicKomentar">
                                <Form.Label>Komentar:</Form.Label>
                                <Form.Control type="text" name="komentar" defaultValue={dataKomentar.komentar} onChange={this.komentarOnChange} />
                            </Form.Group>
                            <Button variant="outline-primary" type="submit" value="Simpan">Post</Button>
                        </Form>
                </div>
        );

    }
}
  