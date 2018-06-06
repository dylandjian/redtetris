import chai from "chai"
import { initServer } from "../../src/server/server"

describe("Fake server test", function() {
  it("Should instantiate the server", function(done) {
    initServer()
    done()
  })

  it("Should respond", function(done) {
    done()
  })
})
