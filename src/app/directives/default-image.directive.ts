// https://medium.com/@sub.metu/angular-fallback-for-broken-images-5cd05c470f08
// https://stackoverflow.com/questions/45172565/use-hostbindings-instead-host-in-angular-4
import { Directive, Input, HostBinding } from '@angular/core';
@Directive({
    selector: 'img[default]',
    host: {
      '(error)':'updateUrl()',
      '(load)': 'load()',
      '[src]':'src'
     }
  })

 export class DefaultImageDirective {
    @Input() src: string;
    @Input() default: string;
    @HostBinding('class') className;

    updateUrl() {
      this.src = this.default;
    }
    load() {
      this.className = 'image-loaded';
    }

      constructor() { }
  }
