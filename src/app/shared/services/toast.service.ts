import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message, title?) {
    this.toastr.success(message, title || 'Success!',{timeOut: 2000});
  }
  
  showError(message, title?) {
    this.toastr.error(message, title || 'Oops!',{timeOut: 2000});
  }

  showWarning(message, title?) {
    this.toastr.warning(message, title || 'Alert!',{timeOut: 2000});
  }

  showInfo(message) {
    this.toastr.info(message)
  }
}
