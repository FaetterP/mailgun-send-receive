const response_from_outlook = {
    'Accept-Language': 'ru-RU, en-US',
    'Arc-Authentication-Results': 'i=1; mx.microsoft.com 1; spf=pass smtp.mailfrom=twelvedevs.com; dmarc=pass action=none header.from=twelvedevs.com; dkim=pass header.d=twelvedevs.com; arc=none',
    'Arc-Message-Signature': 'i=1; a=rsa-sha256; c=relaxed/relaxed; d=microsoft.com; s=arcselector9901; h=From:Date:Subject:Message-ID:Content-Type:MIME-Version:X-MS-Exchange-AntiSpam-MessageData-ChunkCount:X-MS-Exchange-AntiSpam-MessageData-0:X-MS-Exchange-AntiSpam-MessageData-1; bh=txVzbwSHfd4AzCN/hhQNYH9ZY0CAJ+esg5WOFtTfhcE=; b=fP8gOLsrp2K3RQ+IfHS5vHPNRkRJ5UWmUkHimL3hoT/gVr8c2L3aqTCm9w7+QGryoHSAXl2idyVapW6TPKrdmYOcW/Y7nVy9yMLaawoz6yCavnbTb1BJ3e/YhA+SwoeNobr5EzCjjDe6qYPZRZo0jKupGfD/5Y7cWD2ZzurprvR3vL/+R+IDQ9ltcH64U1uAurKuxMALfSxJkyt41QS5/xqxl8jcPe5IqZO1PWLqstzjyGod9omsZUjqdDUkPut9hJBspm+tpacMrhHpL97x4H/AEYMogcnWp+DVfKULQgckGaO/YbWGA9fBkL0su/5axznMDC3CvqjEEw6MG8Y3TA==',
    'Arc-Seal': 'i=1; a=rsa-sha256; s=arcselector9901; d=microsoft.com; cv=none; b=NBzR91vulcCDEfp/4wF4e3Z9oCN5maBgmW5codqz4h0k7HytVjpz7k5n+o988EsGqxSZYvwUP5PIHBQ3aT6ZuLTwoN9sz7eS/Ezt6zKoxTiILlYTUxsQUd6o2k2GMMnc2qk+86fxtUwyhj0J43AmFvwuDjI/gwamYrzSgEEsfn9o5lCnkvBDX3cHRWspwGB6cT18F6oa3px6f36hfRFKHknVfA8gvWt/0E42cAfaly8EFDgIPRE1ecPXpFu1EkHcOY9NSkgTmwdHhFgvvVomoUMC8qcP4iUXmD6gWybae2ALvmJYEMluKskhHnuaZiht5cXOJM24BtnU4eT/gnRt7A==',
    'Authentication-Results': 'dkim=none (message not signed) header.d=none;dmarc=none action=none header.from=twelvedevs.com;',
    'Content-Language': 'ru-RU',
    'Content-Type': 'multipart/alternative; boundary="_000_VI1PR09MB294263809CF3940F6FDE065AD9CF9VI1PR09MB2942eurp_"',
    Date: 'Thu, 26 Jan 2023 11:48:27 +0000',
    'Dkim-Signature': 'v=1; a=rsa-sha256; c=relaxed/relaxed; d=twelvedevs.com; s=selector2; h=From:Date:Subject:Message-ID:Content-Type:MIME-Version:X-MS-Exchange-SenderADCheck; bh=txVzbwSHfd4AzCN/hhQNYH9ZY0CAJ+esg5WOFtTfhcE=; b=6XTk6Q8AB2Ss1zhsFyoPeQyODFi0yd47IjZZUad+o64or5NhUK7rWWGUAbz6jkaXCv0XehkjKirKLo4coZ3UsPdQ38ytXY3u84UyKOcEBt/5OaHNftnb7AE5LaWVo0XxsM0VBL9Ybi3OVHsXdEfndMxuURDjI6iF0aQ1nt8vcGF0/5+yxRcDR4HqVZJsPm973cNFfYfhUxaJadW30CO90EEpPfallnyqdwChSdxk+zBivdUOuJlGreICBfzqYVJso487Y2/YMYk34ATXhAph8QWBgHMJQtcP+l+kjVeCPSziwJqqWFnkNhkf0JmGfKew9JadYfeOTgmdBVm6OoaGwQ==',
    From: 'Vadim Burdylev <vburdylev@twelvedevs.com>',
    'In-Reply-To': '<20230126113827.28588920d00eb380@mg.twelvedevs.com>',
    'Message-Id': '<VI1PR09MB294263809CF3940F6FDE065AD9CF9@VI1PR09MB2942.eurprd09.prod.outlook.com>',
    'Mime-Version': '1.0',
    Msip_labels: '',
    Received: 'from VI1PR09MB2942.eurprd09.prod.outlook.com ([fe80::cd27:1cf1:ba34:7453]) by VI1PR09MB2942.eurprd09.prod.outlook.com ([fe80::cd27:1cf1:ba34:7453%7]) with mapi id 15.20.6043.022; Thu, 26 Jan 2023 11:48:27 +0000',
    References: '<76aea876-5993-4e28-be98-40948e1095d6@mg.twelvedevs.com> <20230126113827.28588920d00eb380@mg.twelvedevs.com>',
    Subject: 'RE: Some user send message',
    'Thread-Index': 'AQHZMXq23kuQd2eb7kW7B1Yn9kSarq6wlTgr',
    'Thread-Topic': 'Some user send message',
    To: '"reply-service@mg.twelvedevs.com" <reply-service@mg.twelvedevs.com>',
    'X-Envelope-From': 'vburdylev@twelvedevs.com',
    'X-Forefront-Antispam-Report': 'CIP:255.255.255.255;CTRY:;LANG:en;SCL:1;SRV:;IPV:NLI;SFV:NSPM;H:VI1PR09MB2942.eurprd09.prod.outlook.com;PTR:;CAT:NONE;SFS:(13230025)(366004)(136003)(376002)(346002)(39830400003)(396003)(451199018)(19627405001)(71200400001)(41300700001)(8676002)(33656002)(558084003)(66556008)(64756008)(66476007)(76116006)(6916009)(91956017)(66446008)(52536014)(5660300002)(316002)(66946007)(8936002)(38100700002)(122000001)(86362001)(38070700005)(26005)(186003)(6506007)(9686003)(55016003)(55236004)(15650500001)(2906002)(478600001)(7696005)(3480700007)(83380400001);DIR:OUT;SFP:1101;',
    'X-Mailgun-Incoming': 'Yes',
    'X-Microsoft-Antispam': 'BCL:0;',
    'X-Microsoft-Antispam-Message-Info': 'gvBiEZe/V9WRqlkoppfRfzdEjboLbfFrVqpkScQynzryqPSqNgehGqsESgOar90EpJE1o7jj2xTGE2Ro+Knhi+aWuXSiHsxr+Fl+A2XYnHTA/uTsqV8l2hDuFTEDFs1dvlvhmz83lDUynjhobPzazjfJlP54Fmc0yr71MRZC5pr3WF1Arj3/9MaBxsNcH5g0BtR20vUd5e7wGd/Pogkrh8vgbqxF4lm4wb3Az0vYS8hNk49Id1dYnuKc+SpUqwi80u/u+smIIiiMrmYZjdROrWjDn9Qx3uUBO/GZAIP+QVT4bszmjPX8eZIDiDqZymI6sDK7HVDBrvw55nR2YocAn3CPO66b9dvrOGqAYQetsEo39Wy6lrrR30XJaCgx78qxV3X8sVjSFedYWvwyaYDay4zDAopKOB1yVijWjydCxEzLjOah+t+Sgcj4C7fIk1aTsS5TGvyV5q4FsELwgFtogDxgXOuB66AB0Q4ek4hMh4PPWjMNDo1HVsOWjEUhnT1/uVnMjRYX8piezvwAP+dcmUbqlddGpZFU9xoijb/hcAXwdf8bX6pdgJLIGrEJS0dAGtpFcIRobFWiZ/L+RH+nAzKK4EQwkKG3rZGRIB/X7pYytW/k3f8Lb0EVyJqiwEjlyyHTfV+4+JUdmgM7QH4KpAiIqteN8T2xjeKZ0rg9s2sKOK9jRI1UCPjIQ1MwGWKnilBMNFmpUXvo27MVVoquJw==',
    'X-Ms-Exchange-Antispam-Messagedata-0': 'kVnbBnZYDrRDdOUx8OjVHE6GOtvGIvX4OEWhpWikPXCcljJeciheNL/grHZYSeDa5ZRVPWUYhBbHeTbZu1TRCYg05vr6z2HP+cnvGH6IYQV3pt2jWfR/JDZ+7/Fn1aOGAdnUHBv2Z492aSCtwuy7XjvOikPz4rHUkOmm00fP5DNBxsM25u2BEPJIy/c6W0Vv2kRZ6E8w4EqSmJdkfzbmbbQCWxsKsZTDfWvuZkorSv62L6PN1KXgl8Yc6WNlDHweYyiJSR8mu6vCdlYi5JCKWq2Xcz4rwDxWIW2dyPrBMOVCxO9JBK9o/wfKb2r9N3rBH8/zSPiVJETMtZ8vFff7awAvv1F2RksKvqwc4UOPHHgt+MGc31JMlVa1IpEdnjeJQQejQDTo65F3rIcmqniw2mNXc1ESdHZzNDJObK3S1o/M6BhxDYRu9V/d312X297r5G8NDBq2UcNrYPX/Tmia83HJWcJBB4I+Wr8AtP4cvP1XTx0qvyBKmedu5cSrceuuvACTz8gPbVxANFoUrA3/5b9f7ZndGQcXkQmx5SxKnoAJUfx13ZOqWDS24SmeeUGvy/r8NimMdbWu0TpTw3O6Llb3NhDFIfxbcs/8c9dL7lcYY6GrUlBNSHzUFtELFxf1KD70fTu2isx84zz6mcOvnLn/GqIcHCbDMqPJCcKJ+c1cNCA5L/1/3aj7x9U3K7nC1ZTpakDPMBvuTyXeota5xX0CaLOWifE1gOg9vQ7smrK3qez2k0ckTvyeoldDXgwIFxKrAT6EGaZrfA2RFltRsZCqboKt+WIfw1AQabzEGYvgvZVm9JjYp4qtThSJg/Sgsd6X1CTupuCEL8xEoTWbz9/18MsUgUxohBmCdSr+JR3rJQDn6idLkmWygMoUeYUmxPmLX6uV3NUFBIReCvBA1TbuCakPCwBrTz9fSGVscsovepwyfy10TYC8mQQCmKUfV8T7PX8gQ0kauXIGVV05eWnVPIg065Tq4YUdNQbZHkfBxyFON0ef9gHpZzhsKfBERukRNjCmEaEjrBVIpl28W5YwYAVYjYxRgqj+CquUhlS18Zxlq0yMQghp6l3EFMljrxug4Yhv94TKknjenISRJaWjnzy+Ha3rluyx0E0jrLgRDh+88uGNEXqmSjq+Wsl0K+4VKDGzYsb95h2OqhDQN0xBrNFVQS+ARDGmXkHdgEGr4Imxq0FktcPoTuedOKZlOHGh2OZpIPZ8G4HhPisaA4CpHQNd9hAaZAAAhkKfZ+UBf2MDqC1gAe5X6j0xcVsWmz1CyNTwTGozdZCtCqHjm2i7ocVJkbKF3XvwJRFGREtILrD9dHn1kRUuVIDa21KCqa2kTtZTWg663OdwGndX7hHQPAawwVGHPMI1UTy9WrphXrKeKhATic80Nq5Ym/WhLJJKP//VwcXWSpmsmow+6v8WZUWgm3RvH8uYjVtlmIeQg8Fq9Qs1ByrRd/ehIQMz8HTgSF4y+UGGKx6LJpjZk5dpsdpLGPD6bIxRVzMch91zhQ0g0/hjpgZLb2fqLquQ6JcFTsoAJrMMm58cb57U4tcVjy5oy9mv17fBoLkqARBDJXULZVJYxLmDe+XgGYZn',
    'X-Ms-Exchange-Antispam-Messagedata-Chunkcount': '1',
    'X-Ms-Exchange-Antispam-Relay': '0',
    'X-Ms-Exchange-Crosstenant-Authas': 'Internal',
    'X-Ms-Exchange-Crosstenant-Authsource': 'VI1PR09MB2942.eurprd09.prod.outlook.com',
    'X-Ms-Exchange-Crosstenant-Fromentityheader': 'Hosted',
    'X-Ms-Exchange-Crosstenant-Id': '91d1a4ae-83aa-4994-ac02-2b552ff91f49',
    'X-Ms-Exchange-Crosstenant-Mailboxtype': 'HOSTED',
    'X-Ms-Exchange-Crosstenant-Network-Message-Id': '86d69acc-34cf-44c5-e0ee-08daff933cf1',
    'X-Ms-Exchange-Crosstenant-Originalarrivaltime': '26 Jan 2023 11:48:27.3637 (UTC)',
    'X-Ms-Exchange-Crosstenant-Userprincipalname': 'JjyqMhOvysmTnWNpac3bkDxgR6E0i1HM9L+no7bs2eP08MFvudHNGDxq4Rw5L1qWR5P52PX8xhpHs6uDuI9jYym2TE/lyvbJST41/eNhZUY=',
    'X-Ms-Exchange-Senderadcheck': '1',
    'X-Ms-Exchange-Transport-Crosstenantheadersstamped': 'DBBPR09MB4681',
    'X-Ms-Has-Attach': '',
    'X-Ms-Office365-Filtering-Correlation-Id': '86d69acc-34cf-44c5-e0ee-08daff933cf1',
    'X-Ms-Publictraffictype': 'Email',
    'X-Ms-Tnef-Correlator': '',
    'X-Ms-Traffictypediagnostic': 'VI1PR09MB2942:EE_|DBBPR09MB4681:EE_',
    'X-Originatororg': 'twelvedevs.com',
    'body-html': '<html>\r\n' +
        '<head>\r\n' +
        '<meta http-equiv="Content-Type" content="text/html; charset=koi8-r">\r\n' +
        '<style type="text/css" style="display:none;"> P {margin-top:0;margin-bottom:0;} </style>\r\n' +
        '</head>\r\n' +
        '<body dir="ltr">\r\n' +
        '<div style="font-family: Calibri, Arial, Helvetica, sans-serif; font-size: 12pt; color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);" class="elementToProof">\r\n' +
        '123456</div>\r\n' +
        '<div id="appendonsend"></div>\r\n' +
        '<hr style="display:inline-block;width:98%" tabindex="-1">\r\n' +
        '<div id="divRplyFwdMsg" dir="ltr"><font face="Calibri, sans-serif" style="font-size:11pt" color="#000000"><b>От:</b> service@mg.twelvedevs.com &lt;service@mg.twelvedevs.com&gt; от имени LibertyMeets service &lt;service@mg.twelvedevs.com&gt;<br>\r\n' +
        '<b>Отправлено:</b> 26 января 2023 г. 14:38<br>\r\n' +
        '<b>Кому:</b> Vadim Burdylev &lt;vburdylev@twelvedevs.com&gt;<br>\r\n' +
        '<b>Тема:</b> Some user send message</font>\r\n' +
        '<div>&nbsp;</div>\r\n' +
        '</div>\r\n' +
        '<div>hello from me.g </div>\r\n' +
        '</body>\r\n' +
        '</html>\r\n',
    'body-plain': '123456\r\n' +
        '________________________________\r\n' +
        'От: service@mg.twelvedevs.com <service@mg.twelvedevs.com> от имени LibertyMeets service <service@mg.twelvedevs.com>\r\n' +
        'Отправлено: 26 января 2023 г. 14:38\r\n' +
        'Кому: Vadim Burdylev <vburdylev@twelvedevs.com>\r\n' +
        'Тема: Some user send message\r\n' +
        '\r\n' +
        'hello from me.g\r\n',
    from: 'Vadim Burdylev <vburdylev@twelvedevs.com>',
    'message-headers': '[["Received","from EUR05-DB8-obe.outbound.protection.outlook.com (mail-db8eur05on2081.outbound.protection.outlook.com [40.107.20.81]) by e84794383116 with SMTP id <undefined> (version=TLS1.2, cipher=TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256); Thu, 26 Jan 2023 11:48:30 GMT"],["Received","from VI1PR09MB2942.eurprd09.prod.outlook.com (2603:10a6:803:ea::12) by DBBPR09MB4681.eurprd09.prod.outlook.com (2603:10a6:10:207::20) with Microsoft SMTP Server (version=TLS1_2, cipher=TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384) id 15.20.6043.22; Thu, 26 Jan 2023 11:48:27 +0000"],["Received","from VI1PR09MB2942.eurprd09.prod.outlook.com ([fe80::cd27:1cf1:ba34:7453]) by VI1PR09MB2942.eurprd09.prod.outlook.com ([fe80::cd27:1cf1:ba34:7453%7]) with mapi id 15.20.6043.022; Thu, 26 Jan 2023 11:48:27 +0000"],["X-Envelope-From","vburdylev@twelvedevs.com"],["X-Mailgun-Incoming","Yes"],["Arc-Seal","i=1; a=rsa-sha256; s=arcselector9901; d=microsoft.com; cv=none; b=NBzR91vulcCDEfp/4wF4e3Z9oCN5maBgmW5codqz4h0k7HytVjpz7k5n+o988EsGqxSZYvwUP5PIHBQ3aT6ZuLTwoN9sz7eS/Ezt6zKoxTiILlYTUxsQUd6o2k2GMMnc2qk+86fxtUwyhj0J43AmFvwuDjI/gwamYrzSgEEsfn9o5lCnkvBDX3cHRWspwGB6cT18F6oa3px6f36hfRFKHknVfA8gvWt/0E42cAfaly8EFDgIPRE1ecPXpFu1EkHcOY9NSkgTmwdHhFgvvVomoUMC8qcP4iUXmD6gWybae2ALvmJYEMluKskhHnuaZiht5cXOJM24BtnU4eT/gnRt7A=="],["Arc-Message-Signature","i=1; a=rsa-sha256; c=relaxed/relaxed; d=microsoft.com; s=arcselector9901; h=From:Date:Subject:Message-ID:Content-Type:MIME-Version:X-MS-Exchange-AntiSpam-MessageData-ChunkCount:X-MS-Exchange-AntiSpam-MessageData-0:X-MS-Exchange-AntiSpam-MessageData-1; bh=txVzbwSHfd4AzCN/hhQNYH9ZY0CAJ+esg5WOFtTfhcE=; b=fP8gOLsrp2K3RQ+IfHS5vHPNRkRJ5UWmUkHimL3hoT/gVr8c2L3aqTCm9w7+QGryoHSAXl2idyVapW6TPKrdmYOcW/Y7nVy9yMLaawoz6yCavnbTb1BJ3e/YhA+SwoeNobr5EzCjjDe6qYPZRZo0jKupGfD/5Y7cWD2ZzurprvR3vL/+R+IDQ9ltcH64U1uAurKuxMALfSxJkyt41QS5/xqxl8jcPe5IqZO1PWLqstzjyGod9omsZUjqdDUkPut9hJBspm+tpacMrhHpL97x4H/AEYMogcnWp+DVfKULQgckGaO/YbWGA9fBkL0su/5axznMDC3CvqjEEw6MG8Y3TA=="],["Arc-Authentication-Results","i=1; mx.microsoft.com 1; spf=pass smtp.mailfrom=twelvedevs.com; dmarc=pass action=none header.from=twelvedevs.com; dkim=pass header.d=twelvedevs.com; arc=none"],["Dkim-Signature","v=1; a=rsa-sha256; c=relaxed/relaxed; d=twelvedevs.com; s=selector2; h=From:Date:Subject:Message-ID:Content-Type:MIME-Version:X-MS-Exchange-SenderADCheck; bh=txVzbwSHfd4AzCN/hhQNYH9ZY0CAJ+esg5WOFtTfhcE=; b=6XTk6Q8AB2Ss1zhsFyoPeQyODFi0yd47IjZZUad+o64or5NhUK7rWWGUAbz6jkaXCv0XehkjKirKLo4coZ3UsPdQ38ytXY3u84UyKOcEBt/5OaHNftnb7AE5LaWVo0XxsM0VBL9Ybi3OVHsXdEfndMxuURDjI6iF0aQ1nt8vcGF0/5+yxRcDR4HqVZJsPm973cNFfYfhUxaJadW30CO90EEpPfallnyqdwChSdxk+zBivdUOuJlGreICBfzqYVJso487Y2/YMYk34ATXhAph8QWBgHMJQtcP+l+kjVeCPSziwJqqWFnkNhkf0JmGfKew9JadYfeOTgmdBVm6OoaGwQ=="],["From","Vadim Burdylev <vburdylev@twelvedevs.com>"],["To","\\"reply-service@mg.twelvedevs.com\\" <reply-service@mg.twelvedevs.com>"],["Subject","RE: Some user send message"],["Thread-Topic","Some user send message"],["Thread-Index","AQHZMXq23kuQd2eb7kW7B1Yn9kSarq6wlTgr"],["Date","Thu, 26 Jan 2023 11:48:27 +0000"],["Message-Id","<VI1PR09MB294263809CF3940F6FDE065AD9CF9@VI1PR09MB2942.eurprd09.prod.outlook.com>"],["References","<76aea876-5993-4e28-be98-40948e1095d6@mg.twelvedevs.com> <20230126113827.28588920d00eb380@mg.twelvedevs.com>"],["In-Reply-To","<20230126113827.28588920d00eb380@mg.twelvedevs.com>"],["Accept-Language","ru-RU, en-US"],["Content-Language","ru-RU"],["X-Ms-Has-Attach",""],["X-Ms-Tnef-Correlator",""],["Msip_labels",""],["Authentication-Results","dkim=none (message not signed) header.d=none;dmarc=none action=none header.from=twelvedevs.com;"],["X-Ms-Publictraffictype","Email"],["X-Ms-Traffictypediagnostic","VI1PR09MB2942:EE_|DBBPR09MB4681:EE_"],["X-Ms-Office365-Filtering-Correlation-Id","86d69acc-34cf-44c5-e0ee-08daff933cf1"],["X-Ms-Exchange-Senderadcheck","1"],["X-Ms-Exchange-Antispam-Relay","0"],["X-Microsoft-Antispam","BCL:0;"],["X-Microsoft-Antispam-Message-Info","gvBiEZe/V9WRqlkoppfRfzdEjboLbfFrVqpkScQynzryqPSqNgehGqsESgOar90EpJE1o7jj2xTGE2Ro+Knhi+aWuXSiHsxr+Fl+A2XYnHTA/uTsqV8l2hDuFTEDFs1dvlvhmz83lDUynjhobPzazjfJlP54Fmc0yr71MRZC5pr3WF1Arj3/9MaBxsNcH5g0BtR20vUd5e7wGd/Pogkrh8vgbqxF4lm4wb3Az0vYS8hNk49Id1dYnuKc+SpUqwi80u/u+smIIiiMrmYZjdROrWjDn9Qx3uUBO/GZAIP+QVT4bszmjPX8eZIDiDqZymI6sDK7HVDBrvw55nR2YocAn3CPO66b9dvrOGqAYQetsEo39Wy6lrrR30XJaCgx78qxV3X8sVjSFedYWvwyaYDay4zDAopKOB1yVijWjydCxEzLjOah+t+Sgcj4C7fIk1aTsS5TGvyV5q4FsELwgFtogDxgXOuB66AB0Q4ek4hMh4PPWjMNDo1HVsOWjEUhnT1/uVnMjRYX8piezvwAP+dcmUbqlddGpZFU9xoijb/hcAXwdf8bX6pdgJLIGrEJS0dAGtpFcIRobFWiZ/L+RH+nAzKK4EQwkKG3rZGRIB/X7pYytW/k3f8Lb0EVyJqiwEjlyyHTfV+4+JUdmgM7QH4KpAiIqteN8T2xjeKZ0rg9s2sKOK9jRI1UCPjIQ1MwGWKnilBMNFmpUXvo27MVVoquJw=="],["X-Forefront-Antispam-Report","CIP:255.255.255.255;CTRY:;LANG:en;SCL:1;SRV:;IPV:NLI;SFV:NSPM;H:VI1PR09MB2942.eurprd09.prod.outlook.com;PTR:;CAT:NONE;SFS:(13230025)(366004)(136003)(376002)(346002)(39830400003)(396003)(451199018)(19627405001)(71200400001)(41300700001)(8676002)(33656002)(558084003)(66556008)(64756008)(66476007)(76116006)(6916009)(91956017)(66446008)(52536014)(5660300002)(316002)(66946007)(8936002)(38100700002)(122000001)(86362001)(38070700005)(26005)(186003)(6506007)(9686003)(55016003)(55236004)(15650500001)(2906002)(478600001)(7696005)(3480700007)(83380400001);DIR:OUT;SFP:1101;"],["X-Ms-Exchange-Antispam-Messagedata-Chunkcount","1"],["X-Ms-Exchange-Antispam-Messagedata-0","kVnbBnZYDrRDdOUx8OjVHE6GOtvGIvX4OEWhpWikPXCcljJeciheNL/grHZYSeDa5ZRVPWUYhBbHeTbZu1TRCYg05vr6z2HP+cnvGH6IYQV3pt2jWfR/JDZ+7/Fn1aOGAdnUHBv2Z492aSCtwuy7XjvOikPz4rHUkOmm00fP5DNBxsM25u2BEPJIy/c6W0Vv2kRZ6E8w4EqSmJdkfzbmbbQCWxsKsZTDfWvuZkorSv62L6PN1KXgl8Yc6WNlDHweYyiJSR8mu6vCdlYi5JCKWq2Xcz4rwDxWIW2dyPrBMOVCxO9JBK9o/wfKb2r9N3rBH8/zSPiVJETMtZ8vFff7awAvv1F2RksKvqwc4UOPHHgt+MGc31JMlVa1IpEdnjeJQQejQDTo65F3rIcmqniw2mNXc1ESdHZzNDJObK3S1o/M6BhxDYRu9V/d312X297r5G8NDBq2UcNrYPX/Tmia83HJWcJBB4I+Wr8AtP4cvP1XTx0qvyBKmedu5cSrceuuvACTz8gPbVxANFoUrA3/5b9f7ZndGQcXkQmx5SxKnoAJUfx13ZOqWDS24SmeeUGvy/r8NimMdbWu0TpTw3O6Llb3NhDFIfxbcs/8c9dL7lcYY6GrUlBNSHzUFtELFxf1KD70fTu2isx84zz6mcOvnLn/GqIcHCbDMqPJCcKJ+c1cNCA5L/1/3aj7x9U3K7nC1ZTpakDPMBvuTyXeota5xX0CaLOWifE1gOg9vQ7smrK3qez2k0ckTvyeoldDXgwIFxKrAT6EGaZrfA2RFltRsZCqboKt+WIfw1AQabzEGYvgvZVm9JjYp4qtThSJg/Sgsd6X1CTupuCEL8xEoTWbz9/18MsUgUxohBmCdSr+JR3rJQDn6idLkmWygMoUeYUmxPmLX6uV3NUFBIReCvBA1TbuCakPCwBrTz9fSGVscsovepwyfy10TYC8mQQCmKUfV8T7PX8gQ0kauXIGVV05eWnVPIg065Tq4YUdNQbZHkfBxyFON0ef9gHpZzhsKfBERukRNjCmEaEjrBVIpl28W5YwYAVYjYxRgqj+CquUhlS18Zxlq0yMQghp6l3EFMljrxug4Yhv94TKknjenISRJaWjnzy+Ha3rluyx0E0jrLgRDh+88uGNEXqmSjq+Wsl0K+4VKDGzYsb95h2OqhDQN0xBrNFVQS+ARDGmXkHdgEGr4Imxq0FktcPoTuedOKZlOHGh2OZpIPZ8G4HhPisaA4CpHQNd9hAaZAAAhkKfZ+UBf2MDqC1gAe5X6j0xcVsWmz1CyNTwTGozdZCtCqHjm2i7ocVJkbKF3XvwJRFGREtILrD9dHn1kRUuVIDa21KCqa2kTtZTWg663OdwGndX7hHQPAawwVGHPMI1UTy9WrphXrKeKhATic80Nq5Ym/WhLJJKP//VwcXWSpmsmow+6v8WZUWgm3RvH8uYjVtlmIeQg8Fq9Qs1ByrRd/ehIQMz8HTgSF4y+UGGKx6LJpjZk5dpsdpLGPD6bIxRVzMch91zhQ0g0/hjpgZLb2fqLquQ6JcFTsoAJrMMm58cb57U4tcVjy5oy9mv17fBoLkqARBDJXULZVJYxLmDe+XgGYZn"],["Content-Type","multipart/alternative; boundary=\\"_000_VI1PR09MB294263809CF3940F6FDE065AD9CF9VI1PR09MB2942eurp_\\""],["Mime-Version","1.0"],["X-Originatororg","twelvedevs.com"],["X-Ms-Exchange-Crosstenant-Authas","Internal"],["X-Ms-Exchange-Crosstenant-Authsource","VI1PR09MB2942.eurprd09.prod.outlook.com"],["X-Ms-Exchange-Crosstenant-Network-Message-Id","86d69acc-34cf-44c5-e0ee-08daff933cf1"],["X-Ms-Exchange-Crosstenant-Originalarrivaltime","26 Jan 2023 11:48:27.3637 (UTC)"],["X-Ms-Exchange-Crosstenant-Fromentityheader","Hosted"],["X-Ms-Exchange-Crosstenant-Id","91d1a4ae-83aa-4994-ac02-2b552ff91f49"],["X-Ms-Exchange-Crosstenant-Mailboxtype","HOSTED"],["X-Ms-Exchange-Crosstenant-Userprincipalname","JjyqMhOvysmTnWNpac3bkDxgR6E0i1HM9L+no7bs2eP08MFvudHNGDxq4Rw5L1qWR5P52PX8xhpHs6uDuI9jYym2TE/lyvbJST41/eNhZUY="],["X-Ms-Exchange-Transport-Crosstenantheadersstamped","DBBPR09MB4681"]]',
    recipient: 'reply-service@mg.twelvedevs.com',
    sender: 'vburdylev@twelvedevs.com',
    signature: 'beebd27fd2372911968f7be91c90719fd1a74d6efb28fbb7ec15359d10960a45',
    'stripped-html': '<html>\n' +
        '<head>\n' +
        '<meta http-equiv="Content-Type" content="text/html; charset=koi8-r">\n' +
        '<style type="text/css" style="display:none;"> P {margin-top:0;margin-bottom:0;} </style>\n' +
        '</head>\n' +
        '<body dir="ltr">\n' +
        '<div style="font-family: Calibri, Arial, Helvetica, sans-serif; font-size: 12pt; color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);" class="elementToProof">\n' +
        '123456</div>\n' +
        '<div id="appendonsend"></div>\n' +
        '<hr style="display:inline-block;width:98%" tabindex="-1">\n' +
        '<div id="divRplyFwdMsg" dir="ltr"><font face="Calibri, sans-serif" style="font-size:11pt" color="#000000"><b>От:</b> service@mg.twelvedevs.com &lt;service@mg.twelvedevs.com&gt; от имени LibertyMeets service &lt;service@mg.twelvedevs.com&gt;<br>\n' +
        '<b>Отправлено:</b> 26 января 2023 г. 14:38<br>\n' +
        '<b>Кому:</b> Vadim Burdylev &lt;vburdylev@twelvedevs.com&gt;<br>\n' +
        '<b>Тема:</b> Some user send message</font>\n' +
        '<div>&nbsp;</div>\n' +
        '</div>\n' +
        '<div>hello from me.g </div>\n' +
        '</body>\n' +
        '</html>\n',
    'stripped-text': '123456\r\n' +
        '________________________________\r\n' +
        'От: service@mg.twelvedevs.com <service@mg.twelvedevs.com> от имени LibertyMeets service <service@mg.twelvedevs.com>\r\n' +
        'Отправлено: 26 января 2023 г. 14:38\r\n' +
        'Кому: Vadim Burdylev <vburdylev@twelvedevs.com>\r\n' +
        'Тема: Some user send message\r\n' +
        '\r\n' +
        'hello from me.g',
    subject: 'RE: Some user send message',
    timestamp: '1674733711',
    token: '364784839504aaf6260437390cd564d161da8273933628a79a'
}

const response_from_gmail = {
    'Content-Type': 'multipart/alternative; boundary="000000000000e737bb05f3297beb"',
    Date: 'Thu, 26 Jan 2023 14:59:30 +0300',
    'Dkim-Signature': 'v=1; a=rsa-sha256; c=relaxed/relaxed; d=gmail.com; s=20210112; h=to:subject:message-id:date:from:in-reply-to:references:mime-version :from:to:cc:subject:date:message-id:reply-to; bh=FG0+KqBRfrgqcNA8FXuyd3V4hZqeH4L1t5zETv03CnY=; b=mGyrN/zNrihYlO86ggE3X2Hmsb1JHw4vtIC/D615NaKWkEIZ+mPr6uTFFtTflUhu6q K0Lts4w7I/CSZ47bKPIzGuHt2WTcuLX4nnarO14da4sJiEXdLGJaGytyH2f3KqNKTqqx PYzrFbvT/v7rt3oIHQQZ+ntZ287BUuOl3VpwoN3yY8BbApuWhLVyVRLNusaSJ0snDuCD qPi+Jv+bFGd7V352o9mueveebI0lDj+Lb4hsq01qcx5wEpJtC2UyIlRlN/nh9clShVWa qH9MODUnAoQpFstNtTPsXrCR9p35HfigaOgMuYXIJFYJ7kAsl9V9kf8xoquzQW+YK7Yj jjuA==',
    From: 'FaetterP <faettterp@gmail.com>',
    'In-Reply-To': '<20230126115841.f223d23891f671b6@mg.twelvedevs.com>',
    'Message-Id': '<CADx_dh_4q==B6GXRHaQKhKaL_QFjqYrWJdu7HWfkvnay-uoQSA@mail.gmail.com>',
    'Mime-Version': '1.0',
    Received: 'by mail-ej1-f44.google.com with SMTP id kt14so4450531ejc.3 for <reply-service@mg.twelvedevs.com>; Thu, 26 Jan 2023 03:59:42 -0800 (PST)',
    References: '<6835de12-d13e-42a4-9e2a-c2752f4a7524@mg.twelvedevs.com> <20230126115841.f223d23891f671b6@mg.twelvedevs.com>',
    Subject: 'Re: Some user send message',
    To: 'reply-service@mg.twelvedevs.com',
    'X-Envelope-From': 'faettterp@gmail.com',
    'X-Gm-Message-State': 'AFqh2kqcserwC3XmVDn8xsCE9ResVp8PLV+1vIOGcwX5RgI+Qz2uddAF R7txRDSrl0vvYyPvRZum490CPZoCLkRhPKUGDekJzI/8',
    'X-Google-Dkim-Signature': 'v=1; a=rsa-sha256; c=relaxed/relaxed; d=1e100.net; s=20210112; h=to:subject:message-id:date:from:in-reply-to:references:mime-version :x-gm-message-state:from:to:cc:subject:date:message-id:reply-to; bh=FG0+KqBRfrgqcNA8FXuyd3V4hZqeH4L1t5zETv03CnY=; b=BxsNbNHusFMz//qoYRbGGsWuc6gbSlmdfEtbNV/Awo1oH1lj+5eRAvrYpZ5UKe4UF1 6NImpHl7fiOZvCMusEjRpt0rlH1m+e/ZbOs5SdITv+m201W5gFFm2Rgyz+3vnA+RjRbB 7ET6SXZO09TKXNQE1FI4RSitjEjoIWc1Txdw0jr3k62R/GWp/tVLN5O0VKsPD5IlISw2 npQSJvUqAxIQYJM9zOGGiVHnc1JAW9HpUpwEepAtkdAy76Yh716n0RkBWGvENNUnsvUC m3d3+lFq3N9G3wOjUWm2RaKooaXngQ1KOlLXp5Dmg7glyFnHPGKZNfSEN1EdMEAucHkQ uLdQ==',
    'X-Google-Smtp-Source': 'AMrXdXsxHZ3vwQnhp2AATtZwPuUulyVTQoiyf6NVD0xZqxj5hZrey9zvjhalEugsAHH0I0Mm6VqsWX3+lsBzxxg/3wQ=',
    'X-Mailgun-Incoming': 'Yes',
    'X-Received': 'by 2002:a17:907:2071:b0:7c0:a321:8df2 with SMTP id qp17-20020a170907207100b007c0a3218df2mr4639884ejb.308.1674734381511; Thu, 26 Jan 2023 03:59:41 -0800 (PST)',
    'body-html': '<div dir="ltr">response from me.g</div><br><div class="gmail_quote"><div dir="ltr" class="gmail_attr">чт, 26 янв. 2023 г. в 14:58, LibertyMeets service &lt;<a href="mailto:service@mg.twelvedevs.com">service@mg.twelvedevs.com</a>&gt;:<br></div><blockquote class="gmail_quote" style="margin:0px 0px 0px 0.8ex;border-left:1px solid rgb(204,204,204);padding-left:1ex">hello from vbtd\r\n' +
        '</blockquote></div>\r\n',
    'body-plain': 'response from me.g\r\n' +
        '\r\n' +
        'чт, 26 янв. 2023 г. в 14:58, LibertyMeets service <service@mg.twelvedevs.com\r\n' +
        '>:\r\n' +
        '\r\n' +
        '> hello from vbtd\r\n',
    from: 'FaetterP <faettterp@gmail.com>',
    'message-headers': '[["Received","from mail-ej1-f44.google.com (mail-ej1-f44.google.com [209.85.218.44]) by 994d6ad4b7b6 with SMTP id <undefined> (version=TLS1.3, cipher=TLS_AES_128_GCM_SHA256); Thu, 26 Jan 2023 11:59:42 GMT"],["Received","by mail-ej1-f44.google.com with SMTP id kt14so4450531ejc.3 for <reply-service@mg.twelvedevs.com>; Thu, 26 Jan 2023 03:59:42 -0800 (PST)"],["X-Envelope-From","faettterp@gmail.com"],["X-Mailgun-Incoming","Yes"],["Dkim-Signature","v=1; a=rsa-sha256; c=relaxed/relaxed; d=gmail.com; s=20210112; h=to:subject:message-id:date:from:in-reply-to:references:mime-version :from:to:cc:subject:date:message-id:reply-to; bh=FG0+KqBRfrgqcNA8FXuyd3V4hZqeH4L1t5zETv03CnY=; b=mGyrN/zNrihYlO86ggE3X2Hmsb1JHw4vtIC/D615NaKWkEIZ+mPr6uTFFtTflUhu6q K0Lts4w7I/CSZ47bKPIzGuHt2WTcuLX4nnarO14da4sJiEXdLGJaGytyH2f3KqNKTqqx PYzrFbvT/v7rt3oIHQQZ+ntZ287BUuOl3VpwoN3yY8BbApuWhLVyVRLNusaSJ0snDuCD qPi+Jv+bFGd7V352o9mueveebI0lDj+Lb4hsq01qcx5wEpJtC2UyIlRlN/nh9clShVWa qH9MODUnAoQpFstNtTPsXrCR9p35HfigaOgMuYXIJFYJ7kAsl9V9kf8xoquzQW+YK7Yj jjuA=="],["X-Google-Dkim-Signature","v=1; a=rsa-sha256; c=relaxed/relaxed; d=1e100.net; s=20210112; h=to:subject:message-id:date:from:in-reply-to:references:mime-version :x-gm-message-state:from:to:cc:subject:date:message-id:reply-to; bh=FG0+KqBRfrgqcNA8FXuyd3V4hZqeH4L1t5zETv03CnY=; b=BxsNbNHusFMz//qoYRbGGsWuc6gbSlmdfEtbNV/Awo1oH1lj+5eRAvrYpZ5UKe4UF1 6NImpHl7fiOZvCMusEjRpt0rlH1m+e/ZbOs5SdITv+m201W5gFFm2Rgyz+3vnA+RjRbB 7ET6SXZO09TKXNQE1FI4RSitjEjoIWc1Txdw0jr3k62R/GWp/tVLN5O0VKsPD5IlISw2 npQSJvUqAxIQYJM9zOGGiVHnc1JAW9HpUpwEepAtkdAy76Yh716n0RkBWGvENNUnsvUC m3d3+lFq3N9G3wOjUWm2RaKooaXngQ1KOlLXp5Dmg7glyFnHPGKZNfSEN1EdMEAucHkQ uLdQ=="],["X-Gm-Message-State","AFqh2kqcserwC3XmVDn8xsCE9ResVp8PLV+1vIOGcwX5RgI+Qz2uddAF R7txRDSrl0vvYyPvRZum490CPZoCLkRhPKUGDekJzI/8"],["X-Google-Smtp-Source","AMrXdXsxHZ3vwQnhp2AATtZwPuUulyVTQoiyf6NVD0xZqxj5hZrey9zvjhalEugsAHH0I0Mm6VqsWX3+lsBzxxg/3wQ="],["X-Received","by 2002:a17:907:2071:b0:7c0:a321:8df2 with SMTP id qp17-20020a170907207100b007c0a3218df2mr4639884ejb.308.1674734381511; Thu, 26 Jan 2023 03:59:41 -0800 (PST)"],["Mime-Version","1.0"],["References","<6835de12-d13e-42a4-9e2a-c2752f4a7524@mg.twelvedevs.com> <20230126115841.f223d23891f671b6@mg.twelvedevs.com>"],["In-Reply-To","<20230126115841.f223d23891f671b6@mg.twelvedevs.com>"],["From","FaetterP <faettterp@gmail.com>"],["Date","Thu, 26 Jan 2023 14:59:30 +0300"],["Message-Id","<CADx_dh_4q==B6GXRHaQKhKaL_QFjqYrWJdu7HWfkvnay-uoQSA@mail.gmail.com>"],["Subject","Re: Some user send message"],["To","reply-service@mg.twelvedevs.com"],["Content-Type","multipart/alternative; boundary=\\"000000000000e737bb05f3297beb\\""]]',
    recipient: 'reply-service@mg.twelvedevs.com',
    sender: 'faettterp@gmail.com',
    signature: 'ec80a25b76254e680fb01a0f47d49e28526e409c5b05046507da23454b73e272',
    'stripped-html': '<html><head></head><body><div dir="ltr">response from me.g</div><br></body></html>',
    'stripped-text': 'response from me.g\r\n' +
        '\r\n' +
        'чт, 26 янв. 2023 г. в 14:58, LibertyMeets service <service@mg.twelvedevs.com\r\n' +
        '>:\r\n' +
        '\r\n' +
        '> hello from vbtd',
    subject: 'Re: Some user send message',
    timestamp: '1674734382',
    token: '3a682a1b9315aed462392f149b18e862f6cbc2cbe7f0da3f82'
}

response_from_icloud = {}