import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import hbs from "htmlbars-inline-precompile";

module("Integration | Component | nav-bar", function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(async function() {
    await render(hbs`<NavBar />`);
  });

  test("it renders", async function(assert) {
    assert.dom("[data-test-nav-bar]").exists();
  });

  test("proper text rendered ", async function(assert) {
    const navbarHeadings = "ABOUT ME EXPERIENCE SERVICES PROJECTS";
    assert.dom("[data-test-nav-bar] div").exists({ count: 5 });
    assert.dom("[data-test-nav-bar]").includesText(navbarHeadings);
  });
});
