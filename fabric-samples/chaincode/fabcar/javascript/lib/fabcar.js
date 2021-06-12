/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {


    async Init(ctx) {
        console.info('=========  Init =========');
    
      }
    
      async StudentMarks(ctx, RegId, StudentName, Marks) {
        console.info('============= START : Create Student ===========');

        const sDetails = {
          StudentName,
          Marks,
        };    
        await ctx.stub.putState(RegId, Buffer.from(JSON.stringify(sDetails)));
        console.log("inserted into ledger")
        console.info('============= END : Create Student ===========');
      }
      async updateStudentMarks(ctx, RegId, StudentName, Marks) {
        console.info('============= START : Create Student ===========');
        
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

}

module.exports = FabCar;
