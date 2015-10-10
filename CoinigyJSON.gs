// CONFIG VALUES
var api_url = 'https://www.coinigy.com/api/v1/';
var coinigy_api_key = '';
var coinigy_api_secret = '';  
// END CONFIG VALUES



// =CoinigyGetAccounts()
// LIST ALL ATTACHED COINIGY ACCOUNTS.  USE TO FIND auth_id FOR DESIRED ACCOUNT TO USE IN FUNCTION CALLS

// =CoinigyGetAccountBalance(auth_id)
// RETURNS TOTAL BALANCE IN BTC FOR REQUESTED ACCOUNT

// =CoinigyGetBalance(auth_id, curr_code, btc)
// RETURNS TOTAL BALANCE FOR REQUESTED ACCOUNT IN EITHER NATIVE CURRENCY (btc=false) OR IN BTC VALUE (btc=true) 
// Note: BTC CONVERSION MAY NOT WORK FOR FIAT AT THIS TIME (untested)



function CoinigyGetBalance(auth_id, curr_code, btc) {

  var payload = { "auth_id" : auth_id };
  
  var balances = GetCoinigyResponse("refreshBalance", payload, "json");    
  
  if(typeof balances.data != 'undefined'){
       var data = balances.data;
    for(var i=0; i<data.length; i++){
      var balance = data[i];
      if(balance.balance_curr_code == curr_code)
      {
        if(btc){
          return balance.btc_balance;
        }else{
          return balance.balance_amount_total; 
        }
      }
    }
  }else return "No Balance Data";
}






function CoinigyGetAccountBalance(auth_id) {

  var payload = { "auth_id" : auth_id };
  
  var balances = GetCoinigyResponse("refreshBalance", payload, "json");  
  //return balances; 
  
  var btc_total = 0;
  if(typeof balances.data != 'undefined'){
       var data = balances.data;
       for(var i=0; i<data.length; i++){
          var balance = data[i];
          if(balance.balance_amount_total > 0 )
          {
              btc_total += parseFloat(balance.btc_balance);
          }
    }
    return btc_total;
  }else return "No Balance Data";
}





function CoinigyGetAccounts() {
  var payload ={};
  var accounts_str = "Account Nickname | Auth_id \r\n\r\n";
  var accounts = GetCoinigyResponse("accounts", payload);
  if(typeof accounts.data != 'undefined'){
    var data = accounts.data;
    for(var i=0; i<data.length; i++){
        var account = data[i];
        accounts_str += account.auth_nickname + " | " + account.auth_id + " \r\n";
    }
    return accounts_str;
  }else return "No account data";
}





function GetCoinigyResponse(method, payload, type)
{  
  
  var http_headers = {
    "X-API-KEY" : coinigy_api_key,
    "X-API-SECRET" : coinigy_api_secret
  }
  
  var http_options = {
    "method" : "post",
    "payload" : payload,
    "headers" : http_headers
  };
  
  
  var url = api_url + method;
  
  var jsondata = UrlFetchApp.fetch(url, http_options);      
  
  if(type=="string")
  {
    return jsondata.getContentText();
  }else{
    return  JSON.parse(jsondata.getContentText()); 
  }     
 
}
