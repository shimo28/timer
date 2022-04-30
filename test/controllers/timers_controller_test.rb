require 'test_helper'

class TimersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get timers_index_url
    assert_response :success
  end

end
