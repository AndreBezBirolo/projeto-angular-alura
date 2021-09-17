import {Directive, ElementRef, OnInit} from '@angular/core';
import {PlatformDetectorService} from '../../../core/platform-detector/platform-detector.service';

@Directive({
  selector: '[ImmediateClick]'
})
export class ImmediateClickDirective implements OnInit{

  constructor(
    private element: ElementRef<any>,
    private platformDetector: PlatformDetectorService
  ) {
  }

  ngOnInit(): void {
    this.platformDetector.isPlatformBrowser() && this.element.nativeElement.click();
  }

}
