import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor='red';

}
