<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>YTH Bpk/Ibu {{$dataUser->user_nm}}</title>
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
                width: 45px;
                height: 45px;
                border-radius: 6px;
                text-align: right;
                color: #00697e;
                font-size: 18px;
                font-weight: 600;
                padding: 3px 30px;
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
                                            src="{{ url('/') }}/img/hore.jpg"
                                            style="padding-top: 3px;border: 0;width: 450px;line-height: 100%;outline: none;text-decoration: none;">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="center"
                                            style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;padding-bottom: 0px;">
                                            <h2 style="font-size: 14px;font-weight: 800;line-height: 36px;color: #5c5c5c;margin: 0;">
                                                YTH Bpk/Ibu  <div style="color: #00697e;font-size: 23px;text-transform: uppercase;">{{$dataUser->user_nm}}</div> 
                                             </h2>
                                             <h4 style="
                                             margin-top: 5px;
                                             font-size: 13px;
                                             font-weight: 500;
                                             color: #5c5c5c;
                                         ">Selamat! Akun Anda telah berhasil Dibuat. <br> Berikut data Akun Anda Untuk Melakukan Login :<br>
                                           
                                          </h4>
                                           
                                        </td>
                                      
                                    </tr>
                                   

                                </table>
                                   </td>
                        </tr>


                        <tr>
                            <td align="center" style="padding: 15px; background-color: #f7f7f7;" bgcolor="#ffb9be">
                                <div>
                                    <table style="width: 95%;">
                                        <tr>
                                            <td style="width:270px;font-size: 14px;font-weight: 500;">E-Mail </td>
                                            <td class="count-list">{{$dataUser->email}}</td>
                                        </tr>
                                        <tr>
                                            <td style="font-size: 14px;font-weight: 500;">Password</td>
                                            <td class="count-list">Artajas@123</td>
                                        </tr>
                                       
                                    </table>
                                </div>       

                            </td>
                        </tr>
                        <tr>
                            <td style="
                            background: #fff;
                            padding: 40px 30px 100px;
                            text-align: justify;
                            font-size: 13px;
                        "> harap segera melakukan login dan melakukan perubahan password demi keamanan akun anda.
                    <br>
                    <br>
                    Terima kasih atas kepercayaan Anda kepada Artajasa - Point Of Sales.
                </td>
                        </tr>


                        <tr>
                            <td align="left" style=" padding: 0px;background-color: #2e2e2e;">
                         
                                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" >
                                  
                                    <tbody><tr>
                                        <td align="center" >
                                            <table border="0" cellspacing="0" cellpadding="0" style="
                                            width: 89%;
                                        ">
                                                <tbody><tr>
                                                    <td align="left" style="border-radius: 5px;">
                                                        <img alt="Artajasa"  border="0" src="{{ url('/') }}/img/logo.png" style="padding-top: 3px;-ms-interpolation-mode: bicubic;border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;max-width: 90px;">
                                    
                                                    </td>
                                                    <td align="left" style="font-size: 16px;font-weight: 400;line-height: 24px;padding-left: 25px;text-align: right;width: 360px;">
                                            <h2 style="font-size: 18px;font-weight: 600;line-height: 21px;color: #fff;margin: 0;text-transform: uppercase;">
                                               Point Of Sales
                                            </h2>
                                            <h4 style="
                                            color: #fff;
                                            font-size: 12px;
                                            font-weight: 100;
                                            text-transform: uppercase;
                                            margin: 0;
                                        ">Artajasa</h4>
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