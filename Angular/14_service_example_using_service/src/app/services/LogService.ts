
export class LogService{

  constructor(){
    console.log('LogService created!!!!!!!!!!!');
  }

  addAccountLog(status:string){
    console.log("status Added/updated to: " +status+" at "+new Date() );
    //console.log('status changed at '+new Date()+"  current status = "+status);
  }
}
