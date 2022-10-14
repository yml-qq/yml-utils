// noinspection JSConstantReassignment

import { getIsMobile } from "../src";

describe("#getIsMobile", function () {
  it("getIsMobile('iPhone') should return true", function () {
    const device = "iPhone";
    expect(getIsMobile(device)).toEqual(true);
  });
});
