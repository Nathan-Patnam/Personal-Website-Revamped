import { module, test } from "qunit";
import { visit, click, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | visit pages", function(hooks) {
  setupApplicationTest(hooks);

  test("visiting about me page", async function(assert) {
    await visit("/");
    assert.dom("[data-test-about-me-heading]").exists();
    await click("[data-test-about-me-heading] span");
    assert.equal(currentURL(), "/about-me");
  });

  test("visting experience page", async function(assert) {
    await visit("/");
    assert.dom("[data-test-experience-heading]").exists();
    await click("[data-test-experience-heading] span");
    assert.equal(currentURL(), "/experience");
  });
});
