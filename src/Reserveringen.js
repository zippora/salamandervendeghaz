import React from 'react';
import './pages/Home.css';


export class Reserveringen extends React.Component {




    render() {


        var mysql = require('mysql')
        var connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'dbuser',
           // password : 's3kreee7',
            database : 'my_db'
        });



        function myFunction() {
            var begindatum = document.getElementById("begindatum").value;
            var einddatum = document.getElementById("einddatum").value;
            var dataString = 'begindatum=' + begindatum + '&einddatum=' + einddatum;

            if (begindatum == '' || einddatum == '') {
                alert("Please Fill All Fields");
            } else {
                connection.connect()
                connection.query('insert into tabel'+begindatum+'and einddatum'+einddatum+'', function (err, rows, fields) {
                    if (err) throw err

                    console.log('reservering opgeslagen')
                })

                connection.end()

            }
            return false;
        }



        return (
            <div>
                <h1><span>Reserveringen vastleggen in agenda</span></h1>
                <div className="contact">
                    <form>
                        <input type="date" name="begindatum" placeholder="begindatum"/>
                        <input type="date" name="einddatum" placeholder="einddatum"/>
                        <button type="submit" onclick="myFunction()">Registreer</button>
                    </form>
                </div>
            </div>

        )
    }


}
