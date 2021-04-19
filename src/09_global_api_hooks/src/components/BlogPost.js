import React from 'react';
import API from '../services/index.js';
import {Button, Form, Row, Col} from 'react-bootstrap';


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

    componentDidMount(){
        this.ambilDataDariServerAPI()
    }

    handleTombolSimpan = (e) => {
        e.preventDefault();
    
        API.postNewsBlog(this.state.postArtikel)
          .then((response) => {
            this.ambilDataDariServerAPI();    // refresh data
            alert('Data berhasil disimpan!');
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

    handleOnDelete = (id) =>{

        API.deleteNewsBlog(id)
        .then((response) =>{
            this.ambilDataDariServerAPI();
            alert('Data berhasil dihapus');
        })
    }
    render(){
        const {dataArtikel, postArtikel} = this.state;

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
            </div>
        );

    }
}
  