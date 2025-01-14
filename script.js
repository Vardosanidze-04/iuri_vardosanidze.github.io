@media (max-width: 768px) {
    .container {
        flex-direction: column;
        align-items: center;
        margin-right: 5%;
    }

    .menu {
        flex-direction: column;
        min-width: 100%;
        padding: 10px 0;
    }

    .menu a {
        font-size: 16px;
        padding: 10px;
    }

    .header-end {
        flex-direction: column;
        align-items: flex-start;
        font-size: 1.5em;
        margin-left: 5%;
    }

    .search-box {
        width: 100%;
        margin-right: 0;
    }

    .search {
        width: 90%;
    }

    .banner {
        min-width: 90%;
        max-width: 90%;
    }

    .product-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        padding: 10px;
    }

    .companies {
        padding: 10px;
    }

    .footer-container {
        flex-direction: column;
        align-items: center;
    }

    .footer-section {
        margin-bottom: 20px;
        text-align: center;
    }
}

/* სტილი ტელეფონისთვის (ეკრანის ზომა 480px-მდე) */
@media (max-width: 480px) {
    .menu {
        flex-direction: column;
        padding: 0;
    }

    .menu a {
        font-size: 14px;
        padding: 8px 0;
    }

    .header-end {
        font-size: 1.2em;
        margin-left: 3%;
    }

    .banner {
        min-width: 95%;
        max-width: 95%;
        margin-top: 1em;
    }

    .product-card {
        box-shadow: none;
        margin-bottom: 10px;
    }

    .product-title {
        font-size: 16px;
    }

    .product-description {
        font-size: 12px;
    }

    .footer-section {
        font-size: 14px;
    }

    .search {
        height: 30px;
        font-size: 14px;
    }

    .pharmacy-item {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .pharmacy-logo {
        width: 80px;
        height: 80px;
    }

    .button {
        font-size: 14px;
        padding: 8px 15px;
    }

    table th, table td {
        font-size: 12px;
        padding: 10px;
    }
}