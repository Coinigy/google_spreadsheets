# Coinigy Google Spreadsheets Integration

Integrate your Coinigy account with a Google Spreadsheet to pull in account info, balances, data, and more!


![Spreadsheet screenshot](http://i.imgur.com/uh0br8L.png "Coinigy Integrated Spreadsheet")
# Installation

1. Open this shared read-only Google Sheet: https://docs.google.com/spreadsheets/d/1U41ChP3epC3QELmtmSDPGvPpIee0OQ_Gww89fY-jW4g/edit?usp=sharing
2. Go to File -> Make a copy and create a new copy of the sheet
3. Open your copy and switch to the "Config" sheet to add your API key/secret
4. Switch to the "Coinigy Enabled Sheet" and build your sheet as necessary
5. If you add a final parameter with a value of "A1" (without quotes) to your function calls, the function will update when you click the "Refresh" button



# Usage

##### =CoinigyGetAccounts()
* LIST ALL ATTACHED COINIGY ACCOUNTS.  USE TO FIND auth_id FOR DESIRED ACCOUNT TO USE IN FUNCTION CALLS

##### =CoinigyGetAccountBalance(auth_id, A1)
* RETURNS TOTAL BALANCE IN BTC FOR REQUESTED ACCOUNT

##### =CoinigyGetBalance(auth_id, curr_code, btc, A1)
* RETURNS TOTAL BALANCE FOR REQUESTED ACCOUNT IN EITHER NATIVE CURRENCY (btc=false) OR IN BTC VALUE (btc=true) 
* BTC CONVERSION MAY NOT WORK FOR FIAT AT THIS TIME (untested)
