import axios from 'axios';

const KEY = 'AIzaSyC_K7Bpl0ppKos4A68MLtn2DjWenhdrncs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});