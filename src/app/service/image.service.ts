import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url:string  = "";

  constructor(private fireStorage: Storage) { }

  public uploadImg($event: any, name : string){
    const file = $event.target.files[0]
    
    const imgRef = ref(this.fireStorage, `imagen/` + name)

    uploadBytes(imgRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error)    )
  }

  getImages(){
    const imagesRef =  ref(this.fireStorage, 'imagen')
    list(imagesRef)
    .then(async respone => {
      for(let item of respone.items){
        this.url = await getDownloadURL(item);
      }
    })
    .catch(error => console.log(error));
  }
}
