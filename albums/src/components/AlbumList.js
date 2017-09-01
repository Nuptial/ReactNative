import React,{Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component { //Class based component use state and use class based component if you fetch data(http requests)

    state = { albums: [] }; //albums array empty at start


    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums:response.data})); // set state after fetching data

        /*
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => response.json())
        .then((responseData)=>{
            console.log(responseData);
        })
        */
    }

    renderAlbums(){
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title}  album={album} />
        ); //map is an array helper
    }

    render(){

        console.log(this.state);

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>

        );
    }
}

export default AlbumList;