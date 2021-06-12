/*
# Copyright IBM Corp. All Rights Reserved.
#
# SPDX-License-Identifier: Apache-2.0
*/

const shim = require('fabric-shim');
const util = require('util');

var Chaincode = class {

  // Initialize the chaincode
  async Init(ctx) {
    console.info('=========  Init =========');

  }

  async StudentMarks(ctx, RegId, StudentName, Marks) {
    console.info('============= START : Create Car ===========');

    const sDetails = {
      StudentName,
      Marks,
    };

    await ctx.stub.putState(RegId, Buffer.from(JSON.stringify(sDetails)));
    console.info('============= END : Create Student ===========');
  }
  async queryStudentMarks(ctx, RegId) {
    const stdAsBytes = await ctx.stub.getState(RegId); // get the car from chaincode state
    if (!stdAsBytes || stdAsBytes.length === 0) {
      throw new Error(`${RegId} does not exist`);
    }
    console.log(stdAsBytes.toString());
    return stdAsBytes.toString();
  }

};

shim.start(new Chaincode());
