import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const tokenizedReq = req.clone({
      setHeaders: {
        // tslint:disable-next-line:max-line-length
        Authorization:
          // tslint:disable-next-line:max-line-length
          "Bearer BQA5YOwQxUqRpPCGT4Ozk_t0XAziuw51VSUOyK2D-2llnT7FmAWHBJplYJoBUAkKNccavoR3UO8_VmEbcOpaWIithohLaLmU0AxqP8mYboCbsPDiOQiJOFee-y6XdmOW2mJIXwT2H4hZmiAPkCyplSZOoKSZjX99oQ"
      }
    });
    return next.handle(tokenizedReq);
  }
}
