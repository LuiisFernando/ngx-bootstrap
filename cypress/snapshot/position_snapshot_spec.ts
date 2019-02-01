/*
import { AccordionPo } from '../support/accordion.po';
import { AlertsPo } from '../support/alerts.po';
import { ButtonsPo } from '../support/buttons.po';
import { CarouselPo } from '../support/carousel.po';
import { CollapsePo } from '../support/collapse.po';
import { DatepickerPo } from '../support/datepicker.po';
import { DropdownsPo } from '../support/dropdowns.po';
import { ModalsPo } from '../support/modals.po';
import { PaginationPo } from '../support/pagination.po';
import { PopoverPo } from '../support/popover.po';
import { RatingPo } from '../support/rating.po';
import { SortablePo } from '../support/sortable.po';
import { TabsPo } from '../support/tabs.po';
import { TimepickerPo } from '../support/timepicker.po';
import { TooltipPo } from '../support/tooltip.po';
import { TypeaheadPo } from '../support/typeahead.po';

describe('Default production test', () => {
  const componentsArray = [
    new AccordionPo(),
    new AlertsPo(),
    new ButtonsPo(),
    new CarouselPo(),
    new CollapsePo(),
    new DatepickerPo(),
    new DropdownsPo(),
    new ModalsPo(),
    new PaginationPo(),
    new PopoverPo(),
    new RatingPo(),
    new SortablePo(),
    new TabsPo(),
    new TimepickerPo(),
    new TooltipPo(),
    new TypeaheadPo()
  ];

  componentsArray.forEach(page => {
    it(`navigate to each page: ${page.pageUrl}`, () => {
      page.navigateTo();
      cy.get('ng-sample-box').each(demo => {
        const subtitle = demo.parent().find('h3').text();

        cy.get(`.bd-example`)
          .eyesOpen({
            appName: 'NGX-bootstrap',
            testName: `${page.pageUrl} - ${subtitle}`,
            browser: [{
              name: 'chrome',
              width: 1280,
              height: 800
            }, {
              name: 'firefox',
              width: 1280,
              height: 800
            }]
          })
          .eyesCheckWindow({
            sizeMode: 'selector',
            selector: `.bd-example`,
            tag: '.bd-example',
            sendDom: false
          })
          .eyesClose();
      });
    });
  });
});
*/
