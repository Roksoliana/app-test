import { Component, OnInit, ViewChild, TemplateRef, Inject, Input } from '@angular/core';
import { NgbModalRef, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../user/user.service';
import { User } from '../user/user';
import { ActionConfig } from './action/action.config.interface';
import { modalAction, modalActionConfig } from './action/action.constants';

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrls: ['./modal-add-user.component.css']
})
export class ModalAddUserComponent implements OnInit {
  private modalRef: NgbModalRef;
  private newUser: User = new User;
  modalAttributes: ActionConfig;
  onSubmit: Function;
  
  @ViewChild('myModal')
  myModal: TemplateRef<any>;
  constructor(
    @Inject(modalAction) private config: ActionConfig,
    private modalService: NgbModal,
    private userService: UserService
  ) { }

  ngOnInit() {
  }
  private addUser(): void{
    this.userService.addU(this.newUser).then(()=>{
     this.modalRef.close();
    });
  }
  updateUser(): void {
    this.userService.update(this.newUser);
    this.modalRef.close();
  }
  openModal(template: TemplateRef<any>): void {
    this.newUser = new User();
    this.onSubmit = this.addUser;
    this.modalRef = this.modalService.open(template, {backdrop: 'static'});
    this.modalAttributes =  {...this.config};
  }
  openModalUpdate(user: User): void {
    this.newUser = user;
    this.newUser = {...user};
    this.onSubmit = this.updateUser;
    this.modalAttributes = {
      title: 'Update User',
      btnCaption: 'Update',
      btnClass: 'btn-warning'
    }
    this.modalRef = this.modalService.open(this.myModal, {backdrop: 'static'});
  }
}
