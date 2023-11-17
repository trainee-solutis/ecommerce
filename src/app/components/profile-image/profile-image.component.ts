import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent implements OnInit{

  file: string = '';

  ngOnInit(): void {
    const storedUrl = sessionStorage.getItem('imageURL');
    if (storedUrl){
      this.file = storedUrl;
    }
  }


  onFileChange(event: any) {
    const files = event.target.files as FileList;

    if (files.length > 0) {
      const _file = URL.createObjectURL(files[0]);
      this.file = _file;

      sessionStorage.setItem('imageURL', _file);

    };
 }







  openFileInput() {
    document.getElementById('image-input-file')?.click();
  }

  // displayImage(event: any){
  //   const input = event.target;

  //   if (input.files && input.files[0]) {
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       this.imgUrl = e.target.result;
  //     };

  //     reader.readAsDataURL(input.files[0]);
  //   };

  // }


}
