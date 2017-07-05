import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   implements OnInit {
  title = 'app';
  list1=[];
  list2=[];
  files=[];
ngOnInit() {


    this.list1= [
              {
                  "label": "Documents",
                  "data": "Documents Folder",
                  "isVisible":true,
                  "children": [{
                          "label": "Work",
                          "data": "Documents Folder",
                          "isVisible":true,
                          "parent":"Documents",
                      },
                      {
                              "label": "play",
                              "data": "paly",
                              "isVisible":true,
                              "parent":"Documents",
                          },
                      {
                          "label": "Home",
                          "data": "Documents Folder",
                          "isVisible":true,
                          "parent":"Documents"
                      }]
              },

              {
                  "label": "Movies",
                  "data": "Movies Folder",
                  "isVisible":true,
                  "children": [{
                          "label": "Movies1",
                          "data": "Work Folder",
                          "isVisible":true,
                          "parent":"Movies"
                      },
                      {
                          "label": "Movies2",
                          "data": "Home Folder2",
                          "isVisible":true,
                          "parent":"Movies"
                      }]
              }
          ]



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
