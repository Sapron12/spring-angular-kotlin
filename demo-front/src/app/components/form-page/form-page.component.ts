import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {FormControl, FormGroup} from '@angular/forms';
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from 'ngx-file-drop';
import {FileInfo} from '../../entities/FileInfo';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {

  constructor(
    private userService: UserService
  ) {
  }

  num = '';
  form = new FormGroup({
    phone: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    patronymic: new FormControl(),
    datetime: new FormControl()
  });
  mask = {
    guide: true,
    showMask: true,
    mask: ['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]
  };
  dialCode: string;

  allFiles: FileInfo[] = [];


  public date: Date = new Date();
  public disabled = false;
  public showSpinners = true;
  public showSeconds = true;
  public touchUi = false;
  public enableMeridian = false;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;


  public files: NgxFileDropEntry[] = [];
  displayedColumns: string[] = ['size', 'name'];

  countryChange(country: any) {
    this.dialCode = country.dialCode;
  }

  log(event) {
    console.log(event);

  }

  onSubmit() {
    console.log(this.form.controls);
    console.log('+'.concat(this.dialCode).concat(' ' + this.num));
  }

  ngOnInit(): void {


  }

  addForm(): void {

  }

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.allFiles.push(new FileInfo(droppedFile.relativePath, file.size));
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          /**
           // You could upload it like this:
           const formData = new FormData()
           formData.append('logo', file, relativePath)

           // Headers
           const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })

           this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
           .subscribe(data => {
            // Sanitized logo returned from backend
          })
           **/

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }


}
