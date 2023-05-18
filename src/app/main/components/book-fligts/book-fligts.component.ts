import { Component } from '@angular/core';

@Component({
  selector: 'app-book-fligts',
  templateUrl: './book-fligts.component.html',
  styleUrls: ['./book-fligts.component.scss']
})
export class BookFligtsComponent {
  labelPosition: 'two' | 'one' = 'two';

  a() {
    console.log('labelPosition', this.labelPosition)
  }

}
