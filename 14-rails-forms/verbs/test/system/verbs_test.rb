require "application_system_test_case"

class VerbsTest < ApplicationSystemTestCase
  setup do
    @verb = verbs(:one)
  end

  test "visiting the index" do
    visit verbs_url
    assert_selector "h1", text: "Verbs"
  end

  test "creating a Verb" do
    visit verbs_url
    click_on "New Verb"

    fill_in "Conjugations", with: @verb.conjugations
    fill_in "Name", with: @verb.name
    click_on "Create Verb"

    assert_text "Verb was successfully created"
    click_on "Back"
  end

  test "updating a Verb" do
    visit verbs_url
    click_on "Edit", match: :first

    fill_in "Conjugations", with: @verb.conjugations
    fill_in "Name", with: @verb.name
    click_on "Update Verb"

    assert_text "Verb was successfully updated"
    click_on "Back"
  end

  test "destroying a Verb" do
    visit verbs_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Verb was successfully destroyed"
  end
end
