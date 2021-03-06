import {PhotoService} from '../photo/photo.service';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Photo} from '../photo/photo';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root'})
export class PhotoListResolver implements Resolve<Photo[]> {
  constructor(private service: PhotoService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> | Promise<Photo[]> | Photo[] {
    const userName = route.params.userName;
    return this.service.listFromUserPaginated(userName, 1)
  }
}
