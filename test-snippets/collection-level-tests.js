    pm.test("COLLECTION Status code is 200", function () {
      pm.response.to.have.status(200);
    });
    pm.test("COLLECTION Response time is less than 1100ms", function () {
        pm.expect(pm.response.responseTime).to.be.below(1100);
    });
    pm.test("COLLECTION Content-Type is present", function () {
        pm.response.to.have.header("Content-Type");
    });
        pm.test("COLLECTION Status code is 200", function () {
      pm.response.to.have.status(200);
    });
