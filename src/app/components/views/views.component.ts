import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'views',
  templateUrl: './views.component.html',
  styleUrls: ['./views.component.css'],
})
export class ViewsComponent {
  offset = 0;
  showModal: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    this.offset = window.pageYOffset * 0.4;
  }

  downloadCV() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../../assets/CV Raquel Blázquez.pdf');
    link.setAttribute('download', 'CV Raquel Blázquez.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  sendEmail() {
    window.open('mailto:raquel.blazquez.estrada@gmail.com', '_blank');
  }
}
