# Coinigy Google Spreadsheets Integration

Integrate your Coinigy account with a Google Spreadsheets to pull in accounts, balances, data, and more!


![Spreadsheet screenshot](http://i.imgur.com/uh0br8L.png "Coinigy Integrated Spreadsheet")
# Installation

1. Open your Google Spreadsheet and click Tools -> Script Editor
2. Click File -> New -> Script File and name it "CoinigyJSON.js"
3. Paste in ImportJSON.gs from this repository and click save
4. Enter config values such as your Coinigy API Key/Secret
5. Click "Save" and then "Play" (green sidways triangle button)
6. Address any errors.  If you don't get any error/message, you should be all set
5. Switch back to the spreadsheet and run commands through formulas like "=CoinigyGetAccounts()"


# Usage

##### =CoinigyGetAccounts()
* LIST ALL ATTACHED COINIGY ACCOUNTS.  USE TO FIND auth_id FOR DESIRED ACCOUNT TO USE IN FUNCTION CALLS

##### =CoinigyGetAccountBalance(auth_id)
* RETURNS TOTAL BALANCE IN BTC FOR REQUESTED ACCOUNT

##### =CoinigyGetBalance(auth_id, curr_code, btc)
* RETURNS TOTAL BALANCE FOR REQUESTED ACCOUNT IN EITHER NATIVE CURRENCY (btc=false) OR IN BTC VALUE (btc=true) 
* BTC CONVERSION MAY NOT WORK FOR FIAT AT THIS TIME (untested)
