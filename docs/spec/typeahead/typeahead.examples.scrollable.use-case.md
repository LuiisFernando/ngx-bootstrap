16.15: Typeahead Scrollable example
===================================
**Primary Actor**: User

**Scope**: Ngx-bootstrap DEMO / BS version 3&4

**Goal**: Show user options in drop-down can be scrollable

Main success scenario:
----------------------
1. User open Typeahead demo page
2. User clicks on Scrollable sub-menu
3. User sees typeahead input and typeahead card with "Model:" text
4. When user starts to type a name of a State from "states" array and there is no matches the drop-down is hidden. The "Model" is filled with inputted data
5. When there are any matches then a drop-down with a list of States matches is shown. The drop-down is limited to show 5 items and has a scroll
6. User is able to scroll down/up to see the matches list
7. Items in the drop-down are clickable
8. When user clicks on any item in typeahead drop-down, then typeahead container auto-fills with a selected State

Variations:
-----------
2*. User scrolls to Scrollable sub-menu
