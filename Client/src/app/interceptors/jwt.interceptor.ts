import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Adds the Authorization header to all outgoing HTTP requests if a JWT token exists in localStorage.
 */
export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};
