declare var $: any;

export class AddH3Component {
  constructor() {}

  //h3 tag
  addH3TagHTMLCode = (uid) => {
    $(`#cb-buttons-${uid}`).append(`
    <!-- h3 tag -->
    <div class="tool box3 m-1">
      <button class="btn btn-light" id="add-h3-box2-${uid}">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-type-h3" fill="currentColor"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.637 13V3.669H6.379V7.62H1.758V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.625-4.272h1.018c1.142 0 1.935.67 1.949 1.674.013 1.005-.78 1.737-2.01 1.73-1.08-.007-1.853-.588-1.935-1.32H9.108c.069 1.327 1.224 2.386 3.083 2.386 1.935 0 3.343-1.155 3.309-2.789-.027-1.51-1.251-2.16-2.037-2.249v-.068c.704-.123 1.764-.91 1.723-2.229-.035-1.353-1.176-2.4-2.954-2.385-1.873.006-2.857 1.162-2.898 2.358h1.196c.062-.69.711-1.299 1.696-1.299.998 0 1.695.622 1.695 1.525.007.922-.718 1.592-1.695 1.592h-.964v1.074z" />
        </svg>
      </button>
    </div>
    `)
  }

  addH3TagClickFunction = (uid) => {
    $(`#add-h3-box2-${uid}`).click(() => {
      $(`#cb-box-2-${uid}`).removeClass('cb-H1 cb-H2').addClass('cb-H3');
    });
  }

  addH3TagToolBox = (uid) => {
    $(`#cb-box-2-${uid}`).removeClass('cb-H1 cb-H2').addClass('cb-H3');
  }
}
