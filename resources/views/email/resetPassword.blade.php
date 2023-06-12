<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Reset Password Pengguna</title>
</head>

<body>
    <!DOCTYPE html>
    <html>

    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;800&display=swap" rel="stylesheet">
        <style type="text/css">
            /* CLIENT-SPECIFIC STYLES */
            html{
                font-family: 'Poppins', sans-serif !important;
            }
            body,
            table,
            td,
            a {
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                font-family: 'Poppins', sans-serif !important;
            }
            .text-list {
                font-size: 13px;
                color: #898989;
                margin-bottom: 10px;
            }

            .unit {
                font-size: 11px;
                color: #5c5c5c;
            }
            .count-list {
                background: #f1f1f1;
                border-radius: 6px;
                text-align: center;
                color: #ff4f5a;
                font-size: 12px;
                font-weight: 600;
                padding: 10px 40px;
            }
            .count-list-unit{
                background: #f1f1f1;
                width: 80px;
                height: 45px;
                border-radius: 6px;
                text-align: center;
                color: #ff735c;
                font-size: 18px;
                font-weight: 600;
            }
            .text-head {
                font-weight: 500;
                font-size: 15px;
            }
            .text-sub-head{
                margin-top: 5px;
                font-size: 13px;
                font-weight: 500;
                color: #5c5c5c;
            }

        </style>
    </head>

    <body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" >
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td align="center" style="background-color: #ededed;" >
                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"style="max-width:600px;">
                        <tr>
                            <td align="center" valign="top" style="font-size:0;" bgcolor="#ededed" height="20">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style="padding: 15px; background-color: #ffffff;" bgcolor="#ffffff">
                                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                                    <tr>
                                        <td align="center"
                                            style="font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px; padding: 5px 0 5px 0;">
                                            <img alt="Birthday" width="125" border="0"
                                            src="{{ url('/') }}/img/hai-min.jpg"
                                            style="padding-top: 3px;border: 0;height: 300px;width: 300px;line-height: 100%;outline: none;text-decoration: none;">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center"
                                            style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;padding-bottom: 0px;">
                                            <h2 style="font-size: 30px;font-weight: 800;line-height: 36px;color: #5c5c5c;margin: 0;text-transform: uppercase;">
                                                <span style="color: #ff4f5a;">Reset</span>  Password
                                             </h2>
                                             <h4 class="text-sub-head">
                                                Terimakasih telah menggunakan aplikasi kami sebagai solusi kebutuhanmu
                                          </h4>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style="padding: 40px 40px 50px;background-color: #F7F7F7;" bgcolor="#F7F7F7">
                                <div>
                                    <h3 style="color:#5c5c5c;font-size: 16px;text-transform: uppercase;margin-bottom: 5px;">{{$dataUser->user_nm}}</h3>
                                    <h3 style="color:#5c5c5c;font-size: 13px;font-weight: 500;text-transform: capitalize;margin-top: 0;">{{$dataUser->address}}</h3>
                                    <h4><span class="count-list">Artajas@123</span></h4>
                                </div>       

                            </td>
                        </tr>   

                        <tr>
                            <td align="left" style=" padding: 20px 10px;background-color: #FFF;">
                         
                                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" >
                                  
                                    <tbody><tr>
                                        <td align="center" >
                                            <table border="0" cellspacing="0" cellpadding="0" style="
                                            width: 89%;
                                        ">
                                                <tbody><tr>
                                                    <td align="left" style="border-radius: 5px;">
                                                        <img alt="Artajas"  border="0" src="{{ url('/') }}/img/logo.png" style="padding-top: 3px;-ms-interpolation-mode: bicubic;border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;max-width: 60px;">
                                    
                                                    </td>
                                                    <td align="left" style="font-size: 16px;font-weight: 400;line-height: 24px;padding-left: 25px;text-align: right;width: 360px;">
                                            <h2 style="font-size: 18px;font-weight: 600;line-height: 21px;color: #ff4f5a;margin: 0;text-transform: uppercase;">
                                               Artajasa
                                            </h2>
                                            <h4 style="
                                            font-size: 12px;
                                            font-weight: 100;
                                            margin: 0;
                                        ">Point Of Sales</h4>
                                        </td>
                                                </tr>
                                            </tbody></table>
                                        </td>
                                    </tr>
                                    
                                </tbody></table>
                            
                            </td>
                        </tr>

                        <tr>
                            <td align="center" valign="top" style="font-size:0;" bgcolor="#ededed" height="50">


                            </td>
                        </tr>



                    </table>
                </td>
            </tr>
        </table>
    </body>

    </html>
    <!-- partial -->

</body>

</html>