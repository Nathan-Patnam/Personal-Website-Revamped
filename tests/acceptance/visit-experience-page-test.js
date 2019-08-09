import { module, test } from "qunit";
import { visit, click, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | visit experience page", function(hooks) {
  setupApplicationTest(hooks);

  test("visiting /visit-experience-page", async function(assert) {
    await visit("/");
    assert.dom("[data-test-experience-heading]").exists();
    await click("[data-test-experience-heading] span");
    assert.equal(currentURL(), "/experience");
  });
});
