import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   implements OnInit {
  title = 'app';
  files=[];
ngOnInit() {

    this.files=  [
          {
              "label": "Documents",
              "id":1,
              "data": "Documents Folder",
              "expandedIcon": "fa-folder-open",
              "collapsedIcon": "fa-folder",
              "isVisible":true,
              "children": [{
                      "label": "Work",
                      "id":2,
                      "data": "Work Folder",
                      "expandedIcon": "fa-folder-open",
                      "collapsedIcon": "fa-folder",
                      "isVisible":true,
                  },
                  {
                      "label": "Home",
                      "id":3,
                      "data": "Home Folder",
                      "expandedIcon": "fa-folder-open",
                      "collapsedIcon": "fa-folder",
                      "isVisible":true,
                  }]
          },

          {
              "label": "Movies12",
              "id":4,
              "data": "Movies Folder",
              "expandedIcon": "fa-folder-open",
              "collapsedIcon": "fa-folder",
              "isVisible":true,
              "children": [{
                      "label": "Work2",
                      "id":5,
                      "data": "Work Folder",
                      "expandedIcon": "fa-folder-open",
                      "collapsedIcon": "fa-folder",
                      "isVisible":true,
                  },
                  {
                      "label": "Home2",
                      "id":6,
                      "data": "Home Folder2",
                      "expandedIcon": "fa-folder-open",
                      "collapsedIcon": "fa-folder",
                      "isVisible":true,
                  }]
          }
      ]
}



}
