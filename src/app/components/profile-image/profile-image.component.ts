import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent implements OnInit{

  file: string = '';

  constructor(private dialog: MatDialog){}

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
      this.openAvatarEditor(_file)
      .subscribe(
        (result) => {
        if(result){
          this.file = result;
        }
      });


    };
  }

  openAvatarEditor(image:string): Observable<any>{
    const dialogRef = this.dialog.open(ImageCropperComponent, {
      maxWidth: '80vw',
      maxHeight: '80vh',
      data: image,
    });
    return dialogRef.afterClosed();
  }



  openFileInput() {
    document.getElementById('image-input-file')?.click();
  }
}
