import { IProductId } from "./common";
export interface IMobileCreate {
    customer_number: string;
    product_id: MobileReloadEnum | MobileDataEnum;
    order_id: string;
}
export interface IMobileResponse {
    transaction_id: string;
    type: string;
    created: string;
    changed: string;
    customer_number: string;
    order_id: string;
    price: string;
    status: string;
    response_code: string;
    serial_number: string;
    amount: string;
    product_id: IProductId;
    error?: string;
}
export declare enum MobileReloadEnum {
    "axis-5k" = 14,
    "axis-10k" = 55,
    "axis-15k" = 223,
    "axis-25k" = 91,
    "axis-30k" = 202,
    "axis-50k" = 92,
    "axis-100k" = 94,
    "axis-200k" = 99,
    "indosat-5k" = 15,
    "indosat-10k" = 60,
    "indosat-12k" = 140,
    "indosat-20k" = 734,
    "indosat-25k" = 24,
    "indosat-30k" = 735,
    "indosat-50k" = 5,
    "indosat-100k" = 6,
    "indosat-150k" = 62,
    "indosat-200k" = 81,
    "indosat-250k" = 82,
    "indosat-500k" = 83,
    "indosat-1000k" = 84,
    "smartfren-5k" = 16,
    "smartfren-10k" = 59,
    "smartfren-20k" = 71,
    "smartfren-25k" = 25,
    "smartfren-50k" = 7,
    "smartfren-60k" = 144,
    "smartfren-100k" = 8,
    "smartfren-150k" = 72,
    "smartfren-200k" = 73,
    "smartfren-250k" = 75,
    "smartfren-300k" = 143,
    "smartfren-500k" = 74,
    "smartfren-1000k" = 80,
    "telkomsel-5k" = 17,
    "telkomsel-10k" = 56,
    "telkomsel-20k" = 108,
    "telkomsel-25k" = 26,
    "telkomsel-40k" = 295,
    "telkomsel-50k" = 9,
    "telkomsel-75k" = 1182,
    "telkomsel-100k" = 10,
    "telkomsel-150k" = 103,
    "telkomsel-200k" = 104,
    "telkomsel-300k" = 105,
    "telkomsel-500k" = 106,
    "telkomsel-1000k" = 107,
    "tri-1k" = 607,
    "tri-2k" = 608,
    "tri-5k" = 13,
    "tri-8k" = 195,
    "tri-10k" = 57,
    "tri-15k" = 118,
    "tri-20k" = 109,
    "tri-25k" = 122,
    "tri-30k" = 22,
    "tri-50k" = 1,
    "tri-100k" = 2,
    "tri-150k" = 85,
    "tri-200k" = 634,
    "tri-300k" = 86,
    "tri-500k" = 87,
    "xl-5k" = 18,
    "xl-10k" = 58,
    "xl-15k" = 801,
    "xl-25k" = 89,
    "xl-30k" = 201,
    "xl-50k" = 90,
    "xl-100k" = 88,
    "xl-150k" = 621,
    "xl-200k" = 95,
    "xl-300k" = 96,
    "xl-500k" = 97,
    "xl-1000k" = 98,
    "indosat-60k" = 1126,
    "indosat-80k" = 1127
}
export declare enum MobileDataEnum {
    "BRONET 4G OWSEM 1GB +1GB (4G) 30hr" = 617,
    "BRONET 4G OWSEM 1GB +3GB (4G) 30hr" = 618,
    "BRONET 4G OWSEM 2GB +6GB (4G) 30hr" = 619,
    "BRONET 4G OWSEM 3GB +9GB (4G) 30hr" = 620,
    "BOLT QUOTA 1,5 GB" = 575,
    "BOLT QUOTA 3 GB" = 576,
    "BOLT QUOTA 8 GB" = 577,
    "BOLT QUOTA 13 GB" = 578,
    "BOLT QUOTA 17 GB" = 579,
    "Indosat Data Extra Kuota 2 GB" = 191,
    "Indosat Data Extra Kuota 4 GB" = 192,
    "Indosat Data Extra Kuota 6 GB" = 193,
    "Indosat Data Freedom Paket L" = 77,
    "Indosat Data Freedom Paket M" = 76,
    "Indosat Data Freedom Paket XL" = 78,
    "Indosat Data Paket Freedom XXL" = 79,
    "Indosat Freedom Internet Plus 1Gb" = 139,
    "Indosat Freedom Internet Plus 2Gb" = 126,
    "Indosat Freedom Internet Plus 4Gb" = 127,
    "Indosat Freedom Internet Plus 5Gb" = 128,
    "Internet 1 GB 7 days" = 565,
    "Unlimited + 5GB (30 Days)" = 890,
    "Unlimited +1 GB" = 566,
    "Unlimited +10 GB" = 570,
    "Unlimited +15 GB" = 571,
    "Unlimited +2 GB" = 567,
    "Unlimited +3 GB" = 568,
    "Unlimited +3GB 12 bln" = 897,
    "Unlimited +3GB 6 bln" = 896,
    "Unlimited +7 GB" = 569,
    "Unlimited Jumbo" = 572,
    "Internet 10 RB" = 778,
    "Internet 100 RB" = 782,
    "Internet 150 RB" = 783,
    "Internet 20 RB" = 779,
    "Internet 200 RB" = 784,
    "Internet 30 RB" = 780,
    "Internet 60 RB" = 781,
    "Data GamesMAX - 25K" = 804,
    "Pulsa Internet Telkomsel Rp100.000 (12+2)" = 36,
    "Pulsa Internet Telkomsel Rp200.000 (50+2)" = 146,
    "Pulsa Internet Telkomsel Rp25.000" = 409,
    "Pulsa Internet Telkomsel Rp50.000" = 35,
    "Kuota++ 1.25GB" = 130,
    "Kuota++ 2.25GB" = 131,
    "Mix Combo 2 GB + 20 menit" = 652,
    "Mix Combo 32 GB + 30 menit" = 653,
    "Mix Combo 38 GB + 30 menit" = 647,
    "Mix Small 2.75GB (750MB + 2GB 4G) 3D" = 603,
    "Mix Small 3 GB 3D" = 604,
    "Mix Small 3.75 GB" = 648,
    "Mix Small 5GB 1D" = 602,
    "Mix Super 10 GB" = 649,
    "Mix Super 24 GB" = 650,
    "Mix Super 30 GB" = 651,
    "Tri 4G Daily pack 2.75 GB 14hr" = 449,
    "Tri 4G Daily pack 2.75 GB 7hr" = 447,
    "Tri 4G Daily pack 3.75 GB 14hr" = 451,
    "Tri 4G Daily pack 3.75 GB 7hr" = 448,
    "Tri 4G ON 10GB 30hr" = 452,
    "Tri Daily pack 1GB 14 Hari" = 442,
    "Tri Daily pack 1GB 7 Hari" = 441,
    "Tri Daily pack 2GB 14 Hari" = 444,
    "Tri Daily pack 2GB 7 Hari" = 443,
    "Tri Monthly Pack 2GB + 20 Menit" = 445,
    "Tri Monthly Pack 3GB + 30 Menit" = 446,
    "Tri Nonstop 4G 32GB + 30 Menit" = 440,
    "AnyNet 150Mnt, 30hr, Rp40rb" = 673,
    "AnyNet 250Mnt, 30hr, Rp60rb" = 674,
    "AnyNet 300Mnt, 90hr, Rp100rb" = 669,
    "AnyNet 400Mnt, 7hr, Rp12rb" = 671,
    "AnyNet 500Mnt, 30hr, Rp140rb" = 672,
    "AnyNet 500Mnt, 90hr, Rp150rb" = 670,
    "Paket HotRod 1.5GB (New)" = 832,
    "Paket HotRod 12GB" = 423,
    "Paket HotRod 16GB" = 424,
    "Paket HotRod 3GB" = 420,
    "Paket HotRod 6GB" = 421,
    "Paket HotRod 800MB" = 419,
    "Paket HotRod 8GB" = 422,
    "XL PASS 1hr, Rp85rb" = 785,
    "XL PASS 3 Days" = 635,
    "XL PASS 30 Days" = 637,
    "XTRA Bicara Nelpon,SMS,Internet, 30hr, Rp35rb" = 676,
    "XTRA Bicara Nelpon+Internet, 30hr, Rp30rb" = 677,
    "XTRA Combo 10GB+10GB" = 588,
    "XTRA Combo 12GB, 12bln (L)" = 345,
    "XTRA Combo 12X, 5GB+5GB" = 654,
    "XTRA Combo 12X, 10GB+10GB" = 655,
    "XTRA Combo 12X, 15GB+15GB" = 656,
    "XTRA Combo 12X, 20GB+20GB" = 657,
    "XTRA Combo 12X, 35GB+35GB" = 658,
    "XTRA Combo 15GB+15GB" = 589,
    "XTRA Combo 18GB, 12bln (XL)" = 346,
    "XTRA Combo 20GB+20GB" = 590,
    "XTRA Combo 30GB, 12bln (2XL)" = 347,
    "XTRA Combo 35GB+35GB" = 591,
    "XTRA Combo 42GB, 12bln (3XL)" = 348,
    "XTRA Combo 5GB+5GB" = 587,
    "XTRA Combo 6GB, 12bln (M)" = 344,
    "Xtra Kuota 30GB, 30hr, 11.900" = 879,
    "Unlimited Smartfren 65 Ribu" = 987,
    "Paket Unlimited Nelpon Sesama +250min Semua Operator 30 Hari" = 1008,
    "XTRA Combo VIP 5GB+5GB, 30hr, Rp69rb" = 1009,
    "XTRA Combo VIP 10GB+10GB, 30hr, Rp99rb" = 1010,
    "XTRA Combo VIP 15GB+15GB, 30hr, Rp139rb" = 1011,
    "XTRA Combo VIP 20GB+20GB, 30hr, Rp189rb" = 1012,
    "XTRA Combo VIP 35GB+35GB, 30hr, Rp249rb" = 1013,
    "AnyNet 325Mnt, 30hr, Rp75rb" = 986,
    "BRONET 24Jam 2GB 60hr" = 1090,
    "BRONET 24Jam 3GB 60hr" = 1091,
    "BRONET 24Jam 5GB 60hr" = 1092,
    "BRONET 24Jam 8GB 60hr" = 1093,
    "BRONET 24Jam 10GB 60hr" = 1094,
    "BRONET 24Jam 12GB 60hr" = 1095,
    "BRONET 24Jam 16GB 60hr" = 1096,
    "XL PASS 7 hari" = 1106,
    "Paket KZL Games 500MB 7hr" = 1185,
    "Paket KZL Games 1GB 30hr" = 1186,
    "Paket KZL SocMed Unlimited 7hr" = 1187,
    "Paket KZL SocMed Unlimited 30hr" = 1188,
    "Paket KZL Chat Unlimited 7hr" = 1189,
    "Paket KZL Chat Unlimited 30hr" = 1190,
    "Paket KZL Combo Unlimited 7hr" = 1191,
    "Paket KZL Combo Unlimited 30hr" = 1192
}
