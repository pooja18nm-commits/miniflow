// ==========================================
// MINIFLOW - CREATE SHIPMENT MODULE
// ==========================================
document.addEventListener("DOMContentLoaded", function () {

    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(function (item) {

        const text = item.textContent.trim();

        // Dashboard
        if (text.includes("Dashboard")) {

            item.addEventListener("click", function () {
                location.reload();
            });

        }

        // Create Shipment
        if (text.includes("Create Shipment")) {

            item.addEventListener("click", function () {
                openCreateShipment();
            });

        }

        // Shipments
        if (text.includes("Shipments")) {

            item.addEventListener("click", function () {
                openShipments();
            });

        }

        // Tracking
        if (text.includes("Tracking")) {

            item.addEventListener("click", function () {
                openTracking();
            });

        }

    });

});


const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(function (item) {

    const text = item.textContent.trim();

    // Create Shipment
    if (text.includes("Create Shipment")) {

        item.addEventListener("click", function () {
            openCreateShipment();
        });

    }

    // Shipments
    if (text.includes("Shipments")) {

        item.addEventListener("click", function () {
            openShipments();
        });

    }

});


// ==========================================
// OPEN CREATE SHIPMENT
// ==========================================

function openCreateShipment() {

    const main = document.querySelector(".main");

    main.innerHTML = `

        <div class="shipment-page">

            <div class="shipment-header">

                <div>
                    <h1>Create Shipment</h1>

                    <p>
                        Create a new shipment and generate an AWB
                    </p>
                </div>

                <button class="back-button"
                    onclick="location.reload()">
                    ← Back to Dashboard
                </button>

            </div>


            <!-- STEP 1 -->

            <div class="form-card">

                <div class="step-title">

                    <span class="step-number">01</span>

                    <div>
                        <h2>Order Details</h2>
                        <p>Enter basic order information</p>
                    </div>

                </div>


                <div class="form-grid">

                    <div class="field">

                        <label>Order ID *</label>

                        <input
                            id="orderId"
                            type="text"
                            placeholder="Example: ORD10001">

                    </div>


                    <div class="field">

                        <label>Order Date *</label>

                        <input
                            id="orderDate"
                            type="date">

                    </div>


                    <div class="field">

                        <label>Invoice Number</label>

                        <input
                            id="invoiceNumber"
                            type="text"
                            placeholder="Example: INV10001">

                    </div>


                    <div class="field">

                        <label>Invoice Value ₹</label>

                        <input
                            id="invoiceValue"
                            type="number"
                            placeholder="0">

                    </div>

                </div>

            </div>


            <!-- STEP 2 -->

            <div class="form-card">

                <div class="step-title">

                    <span class="step-number">02</span>

                    <div>
                        <h2>Pickup Details</h2>
                        <p>Enter warehouse pickup information</p>
                    </div>

                </div>


                <div class="form-grid">

                    <div class="field">

                        <label>Warehouse *</label>

                        <input
                            id="warehouse"
                            type="text"
                            placeholder="Example: Bangalore Warehouse">

                    </div>


                    <div class="field">

                        <label>Contact Person *</label>

                        <input
                            id="pickupContact"
                            type="text"
                            placeholder="Contact name">

                    </div>


                    <div class="field">

                        <label>Phone *</label>

                        <input
                            id="pickupPhone"
                            type="tel"
                            placeholder="10 digit mobile number">

                    </div>


                    <div class="field">

                        <label>City *</label>

                        <input
                            id="pickupCity"
                            type="text"
                            placeholder="Bangalore">

                    </div>


                    <div class="field full">

                        <label>Address *</label>

                        <textarea
                            id="pickupAddress"
                            placeholder="Pickup address"></textarea>

                    </div>


                    <div class="field">

                        <label>State *</label>

                        <input
                            id="pickupState"
                            type="text"
                            placeholder="Karnataka">

                    </div>


                    <div class="field">

                        <label>Pincode *</label>

                        <input
                            id="pickupPincode"
                            type="text"
                            placeholder="560001">

                    </div>

                </div>

            </div>


            <!-- STEP 3 -->

            <div class="form-card">

                <div class="step-title">

                    <span class="step-number">03</span>

                    <div>
                        <h2>Delivery Details</h2>
                        <p>Enter customer delivery information</p>
                    </div>

                </div>


                <div class="form-grid">

                    <div class="field">

                        <label>Customer Name *</label>

                        <input
                            id="customerName"
                            type="text"
                            placeholder="Customer name">

                    </div>


                    <div class="field">

                        <label>Phone *</label>

                        <input
                            id="customerPhone"
                            type="tel"
                            placeholder="10 digit mobile number">

                    </div>


                    <div class="field">

                        <label>City *</label>

                        <input
                            id="deliveryCity"
                            type="text"
                            placeholder="Mumbai">

                    </div>


                    <div class="field">

                        <label>State *</label>

                        <input
                            id="deliveryState"
                            type="text"
                            placeholder="Maharashtra">

                    </div>


                    <div class="field full">

                        <label>Delivery Address *</label>

                        <textarea
                            id="deliveryAddress"
                            placeholder="Complete delivery address"></textarea>

                    </div>


                    <div class="field">

                        <label>Pincode *</label>

                        <input
                            id="deliveryPincode"
                            type="text"
                            placeholder="400001">

                    </div>

                </div>

            </div>


            <!-- STEP 4 -->

            <div class="form-card">

                <div class="step-title">

                    <span class="step-number">04</span>

                    <div>
                        <h2>Package Details</h2>
                        <p>Enter package dimensions and weight</p>
                    </div>

                </div>


                <div class="form-grid">

                    <div class="field">

                        <label>Product / SKU *</label>

                        <input
                            id="product"
                            type="text"
                            placeholder="Example: TSHIRT-001">

                    </div>


                    <div class="field">

                        <label>Quantity *</label>

                        <input
                            id="quantity"
                            type="number"
                            min="1"
                            value="1">

                    </div>


                    <div class="field">

                        <label>Actual Weight (kg) *</label>

                        <input
                            id="actualWeight"
                            type="number"
                            step="0.01"
                            min="0"
                            placeholder="20">

                    </div>


                    <div class="field">

                        <label>Length (cm) *</label>

                        <input
                            id="length"
                            type="number"
                            step="0.01"
                            min="0"
                            placeholder="40">

                    </div>


                    <div class="field">

                        <label>Breadth (cm) *</label>

                        <input
                            id="breadth"
                            type="number"
                            step="0.01"
                            min="0"
                            placeholder="23">

                    </div>


                    <div class="field">

                        <label>Height (cm) *</label>

                        <input
                            id="height"
                            type="number"
                            step="0.01"
                            min="0"
                            placeholder="16">

                    </div>


                    <div class="field calculated">

                        <label>Volumetric Weight</label>

                        <div class="calculated-value">

                            <span id="volumetricWeight">
                                0.00
                            </span>

                            kg

                        </div>

                    </div>


                    <div class="field calculated">

                        <label>Chargeable Weight</label>

                        <div class="calculated-value">

                            <span id="chargeableWeight">
                                0.00
                            </span>

                            kg

                        </div>

                    </div>

                </div>


                <div class="formula-box">

                    <strong>Calculation:</strong>

                    Volumetric Weight =
                    Length × Breadth × Height ÷ 5000

                </div>

            </div>


            <!-- STEP 5 -->

            <div class="form-card">

                <div class="step-title">

                    <span class="step-number">05</span>

                    <div>
                        <h2>Shipping Details</h2>
                        <p>Select payment type and carrier</p>
                    </div>

                </div>


                <div class="form-grid">

                    <div class="field">

                        <label>Payment Type *</label>

                        <select id="paymentType">

                            <option value="Prepaid">
                                Prepaid
                            </option>

                            <option value="COD">
                                COD
                            </option>

                        </select>

                    </div>


                    <div class="field">

                        <label>Service *</label>

                        <select id="service">

                            <option>
                                Surface
                            </option>

                            <option>
                                Express
                            </option>

                            <option>
                                Air
                            </option>

                        </select>

                    </div>


                    <div class="field">

                        <label>Carrier *</label>

                        <select id="carrier">

                            <option>
                                Delhivery
                            </option>

                            <option>
                                Blue Dart
                            </option>

                            <option>
                                DTDC
                            </option>

                            <option>
                                XpressBees
                            </option>

                            <option>
                                Ecom Express
                            </option>

                        </select>

                    </div>


                    <div class="field" id="codField">

                        <label>COD Amount ₹</label>

                        <input
                            id="codAmount"
                            type="number"
                            min="0"
                            value="0">

                    </div>

                </div>

            </div>


            <!-- ACTIONS -->

            <div class="shipment-actions">

                <button
                    class="cancel-button"
                    onclick="location.reload()">

                    Cancel

                </button>


                <button
                    class="create-button"
                    onclick="createShipment()">

                    🚚 Create Shipment

                </button>

            </div>


        </div>

    `;


    addShipmentStyles();

    setupWeightCalculation();

    setupCOD();

}


// ==========================================
// WEIGHT CALCULATION
// ==========================================

function setupWeightCalculation() {

    const fields = [
        "actualWeight",
        "length",
        "breadth",
        "height"
    ];

    fields.forEach(function (id) {

        document
            .getElementById(id)
            .addEventListener("input", calculateWeight);

    });

}


function calculateWeight() {

    const actual =
        parseFloat(document.getElementById("actualWeight").value) || 0;

    const length =
        parseFloat(document.getElementById("length").value) || 0;

    const breadth =
        parseFloat(document.getElementById("breadth").value) || 0;

    const height =
        parseFloat(document.getElementById("height").value) || 0;


    const volumetric =
        (length * breadth * height) / 5000;


    const chargeable =
        Math.max(actual, volumetric);


    document.getElementById("volumetricWeight")
        .textContent = volumetric.toFixed(2);


    document.getElementById("chargeableWeight")
        .textContent = chargeable.toFixed(2);

}


// ==========================================
// COD
// ==========================================

function setupCOD() {

    const payment =
        document.getElementById("paymentType");

    const codField =
        document.getElementById("codField");


    payment.addEventListener("change", function () {

        if (payment.value === "COD") {

            codField.style.display = "block";

        } else {

            codField.style.display = "none";

            document.getElementById("codAmount").value = 0;

        }

    });

}


// ==========================================
// CREATE SHIPMENT
// ==========================================

function createShipment() {

    const orderId =
        document.getElementById("orderId").value.trim();


    const customerName =
        document.getElementById("customerName").value.trim();


    const actualWeight =
        parseFloat(
            document.getElementById("actualWeight").value
        ) || 0;


    if (!orderId) {

        alert("Please enter Order ID.");

        return;

    }


    if (!customerName) {

        alert("Please enter Customer Name.");

        return;

    }


    if (actualWeight <= 0) {

        alert("Please enter a valid Actual Weight.");

        return; 
            }


    const length =
        parseFloat(
            document.getElementById("length").value
        ) || 0;


    const breadth =
        parseFloat(
            document.getElementById("breadth").value
        ) || 0;


    const height =
        parseFloat(
            document.getElementById("height").value
        ) || 0;


    if (length <= 0 || breadth <= 0 || height <= 0) {

        alert("Please enter valid package dimensions.");

        return;

    }


    // Calculate weights
    const volumetricWeight =
        (length * breadth * height) / 5000;


    const chargeableWeight =
        Math.max(
            actualWeight,
            volumetricWeight
        );


    // Generate demo AWB
    const awb =
        "MF" +
        Math.floor(
            1000000000 +
            Math.random() * 9000000000
        );


    const shipment = {

        awb: awb,

        orderId:
            document.getElementById("orderId").value,

        orderDate:
            document.getElementById("orderDate").value,

        invoiceNumber:
            document.getElementById("invoiceNumber").value,

        invoiceValue:
            document.getElementById("invoiceValue").value,

        customerName:
            customerName,

        customerPhone:
            document.getElementById("customerPhone").value,

        warehouse:
            document.getElementById("warehouse").value,

        pickupContact:
            document.getElementById("pickupContact").value,

        pickupPhone:
            document.getElementById("pickupPhone").value,

        pickupCity:
            document.getElementById("pickupCity").value,

        pickupState:
            document.getElementById("pickupState").value,

        pickupAddress:
            document.getElementById("pickupAddress").value,

        pickupPincode:
            document.getElementById("pickupPincode").value,

        deliveryCity:
            document.getElementById("deliveryCity").value,

        deliveryState:
            document.getElementById("deliveryState").value,

        deliveryAddress:
            document.getElementById("deliveryAddress").value,

        deliveryPincode:
            document.getElementById("deliveryPincode").value,

        product:
            document.getElementById("product").value,

        quantity:
            document.getElementById("quantity").value,

        actualWeight:
            actualWeight,

        length:
            length,

        breadth:
            breadth,

        height:
            height,

        volumetricWeight:
            volumetricWeight.toFixed(2),

        chargeableWeight:
            chargeableWeight.toFixed(2),

        carrier:
            document.getElementById("carrier").value,

        service:
            document.getElementById("service").value,

        paymentType:
            document.getElementById("paymentType").value,

        codAmount:
            document.getElementById("codAmount").value,

        status:
            "AWB Generated",

        ndrReason:
            "",

        ndrAttempt:
            0,

        createdAt:
            new Date().toLocaleString(),

        lastUpdated:
            new Date().toLocaleString()

    };


    // Get existing shipments
    const shipments =
        JSON.parse(
            localStorage.getItem("miniflowShipments") || "[]"
        );


    // Save shipment
    shipments.push(shipment);


    localStorage.setItem(
        "miniflowShipments",
        JSON.stringify(shipments)
    );


    alert(
        "Shipment created successfully!\n\nAWB: " +
        awb
    );


    // Open shipment details
    openShipmentDetails(awb);

}


// ==========================================
// OPEN SHIPMENTS
// ==========================================

function openShipments() {

    const main =
        document.querySelector(".main");


    const shipments =
        JSON.parse(
            localStorage.getItem("miniflowShipments") || "[]"
        );


    main.innerHTML = `

        <div class="page-header">

            <div>

                <h1>Shipments</h1>

                <p>
                    Manage all Miniflow shipments
                </p>

            </div>

            <button
                class="primary-button"
                onclick="openCreateShipment()">

                + Create Shipment

            </button>

        </div>


        <div class="stats-grid">

            <div class="stat-card">

                <div class="stat-label">
                    Total Shipments
                </div>

                <div class="stat-value">
                    ${shipments.length}
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-label">
                    Delivered
                </div>

                <div class="stat-value">

                    ${
                        shipments.filter(function(shipment) {

                            return shipment.status === "Delivered";

                        }).length
                    }

                </div>

            </div>


            <div class="stat-card">

                <div class="stat-label">
                    In Transit
                </div>

                <div class="stat-value">

                    ${
                        shipments.filter(function(shipment) {

                            return shipment.status === "In Transit";

                        }).length
                    }

                </div>

            </div>


            <div class="stat-card">

                <div class="stat-label">
                    NDR
                </div>

                <div class="stat-value">

                    ${
                        shipments.filter(function(shipment) {

                            return shipment.status === "NDR";

                        }).length
                    }

                </div>

            </div>

        </div>


        <div class="panel">

            <h2>Shipment List</h2>


            <div style="
                overflow-x:auto;
            ">

                <table class="data-table">

                    <thead>

                        <tr>

                            <th>AWB</th>

                            <th>Order ID</th>

                            <th>Customer</th>

                            <th>Carrier</th>

                            <th>Weight</th>

                            <th>Status</th>

                            <th>Action</th>

                        </tr>

                    </thead>


                    <tbody>

                        ${
                            shipments.length
                            ?
                            shipments.map(function(shipment) {

                                return `

                                    <tr>

                                        <td>
                                            <strong>
                                                ${shipment.awb}
                                            </strong>
                                        </td>

                                        <td>
                                            ${shipment.orderId || "-"}
                                        </td>

                                        <td>
                                            ${shipment.customerName || "-"}
                                        </td>

                                        <td>
                                            ${shipment.carrier || "-"}
                                        </td>

                                        <td>
                                            ${
                                                shipment.chargeableWeight ||
                                                shipment.actualWeight ||
                                                "0"
                                            }
                                            kg
                                        </td>

                                        <td>

                                            <span class="status">
                                                ${
                                                    shipment.status ||
                                                    "Created"
                                                }
                                            </span>

                                        </td>

                                        <td>

                                            <button
                                                class="small-button"
                                                onclick="openShipmentDetails('${shipment.awb}')">

                                                View

                                            </button>

                                        </td>

                                    </tr>

                                `;

                            }).join("")

                            :

                            `

                                <tr>

                                    <td
                                        colspan="7"
                                        style="
                                            text-align:center;
                                            padding:40px;
                                            color:#64748b;
                                        "
                                    >

                                        No shipments found.

                                    </td>

                                </tr>

                            `
                        }

                    </tbody>

                </table>

            </div>

        </div>

    `;


    addCommonStyles();

}


// ==========================================
// SHIPMENT DETAILS
// ==========================================

function openShipmentDetails(awb) {

    const shipments =
        JSON.parse(
            localStorage.getItem("miniflowShipments") || "[]"
        );


    const shipment =
        shipments.find(function(item) {

            return item.awb === awb;

        });


    if (!shipment) {

        alert("Shipment not found.");

        return;

    }


    const main =
        document.querySelector(".main");


    main.innerHTML = `

        <div class="page-header">

            <div>

                <h1>Shipment Details</h1>

                <p>
                    AWB: ${shipment.awb}
                </p>

            </div>

            <button
                class="secondary-button"
                onclick="openShipments()">

                ← Back to Shipments

            </button>

        </div>


        <div class="panel">

            <h2>Shipment Information</h2>


            <div class="detail-grid">

                <div>
                    <strong>AWB</strong>
                    <span>${shipment.awb}</span>
                </div>


                <div>
                    <strong>Order ID</strong>
                    <span>${shipment.orderId || "-"}</span>
                </div>


                <div>
                    <strong>Order Date</strong>
                    <span>${shipment.orderDate || "-"}</span>
                </div>


                <div>
                    <strong>Customer</strong>
                    <span>${shipment.customerName || "-"}</span>
                </div>


                <div>
                    <strong>Phone</strong>
                    <span>${shipment.customerPhone || "-"}</span>
                </div>


                <div>
                    <strong>Carrier</strong>
                    <span>${shipment.carrier || "-"}</span>
                </div>


                <div>
                    <strong>Service</strong>
                    <span>${shipment.service || "-"}</span>
                </div>


                <div>
                    <strong>Status</strong>
                    <span class="status">
                        ${shipment.status || "Created"}
                    </span>
                </div>


                <div>
                    <strong>Actual Weight</strong>
                    <span>
                        ${shipment.actualWeight || 0} kg
                    </span>
                </div>


                <div>
                    <strong>Volumetric Weight</strong>
                    <span>
                        ${shipment.volumetricWeight || 0} kg
                    </span>
                </div>


                <div>
                    <strong>Chargeable Weight</strong>
                    <span>
                        ${shipment.chargeableWeight || 0} kg
                    </span>
                </div>


                <div>
                    <strong>Payment Type</strong>
                    <span>
                        ${shipment.paymentType || "-"}
                    </span>
                </div>


                <div>
                    <strong>Invoice Number</strong>
                    <span>
                        ${shipment.invoiceNumber || "-"}
                    </span>
                </div>


                <div>
                    <strong>Invoice Value</strong>
                    <span>
                        ₹${shipment.invoiceValue || 0}
                    </span>
                </div>


                <div>
                    <strong>Product</strong>
                    <span>
                        ${shipment.product || "-"}
                    </span>
                </div>


                <div>
                    <strong>Quantity</strong>
                    <span>
                        ${shipment.quantity || "-"}
                    </span>
                </div>

            </div>


            <hr style="
                margin:30px 0;
                border:none;
                border-top:1px solid #e5e7eb;
            ">


            <h2>Delivery Details</h2>


            <div class="detail-grid">

                <div>
                    <strong>City</strong>
                    <span>
                        ${shipment.deliveryCity || "-"}
                    </span>
                </div>


                <div>
                    <strong>State</strong>
                    <span>
                        ${shipment.deliveryState || "-"}
                    </span>
                </div>


                <div>
                    <strong>Pincode</strong>
                    <span>
                        ${shipment.deliveryPincode || "-"}
                    </span>
                </div>


                <div>
                    <strong>Address</strong>
                    <span>
                        ${shipment.deliveryAddress || "-"}
                    </span>
                </div>

            </div>


            <div style="
                margin-top:30px;
                display:flex;
                gap:10px;
                flex-wrap:wrap;
            ">

                <button
                    class="small-button"
                    onclick="openTrackingForAWB('${shipment.awb}')">

                    🔎 Track Shipment

                </button>


                <button
                    class="small-button"
                    onclick="openShipments()">

                    ← Back

                </button>

            </div>

        </div>

    `;


    addCommonStyles();

}


// ==========================================
// TRACKING
// ==========================================

function openTracking() {

    const main =
        document.querySelector(".main");


    main.innerHTML = `

        <div class="page-header">

            <div>

                <h1>Tracking</h1>

                <p>
                    Track shipment status using AWB
                </p>

            </div>

        </div>


        <div class="panel">

            <h2>Track Shipment</h2>


            <div style="
                display:flex;
                gap:10px;
                margin-bottom:25px;
            ">

                <input
                    id="trackingAWB"
                    placeholder="Enter AWB number"
                    style="
                        flex:1;
                        padding:12px;
                        border:1px solid #d1d5db;
                        border-radius:7px;
                    "
                >


                <button
                    class="primary-button"
                    onclick="trackShipment()">

                    Track

                </button>

            </div>


            <div id="trackingResult"></div>

        </div>

    `;


    addCommonStyles();

}


// ==========================================
// TRACK SPECIFIC AWB
// ==========================================

function openTrackingForAWB(awb) {

    openTracking();

    const input =
        document.getElementById("trackingAWB");


    if (input) {

        input.value = awb;

        trackShipment();

    }

}


// ==========================================
// TRACK SHIPMENT
// ==========================================

function trackShipment() {

    const awb =
        document
            .getElementById("trackingAWB")
            .value
            .trim();


    if (!awb) {

        alert("Please enter an AWB number.");

        return;

    }


    const shipments =
        JSON.parse(
            localStorage.getItem("miniflowShipments") || "[]"
        );


    const shipment =
        shipments.find(function(item) {

            return item.awb === awb;

        });


    const result =
        document.getElementById("trackingResult");


    if (!shipment) {

        result.innerHTML = `

            <div style="
                padding:20px;
                background:#fef2f2;
                color:#991b1b;
                border-radius:8px;
            ">

                Shipment not found.

            </div>

        `;

        return;

    }


    renderTrackingResult(shipment);

}


// ==========================================
// RENDER TRACKING RESULT
// ==========================================

function renderTrackingResult(shipment) {

    const result =
        document.getElementById("trackingResult");


    if (!result) {
        return;
    }


    result.innerHTML = `

        <div style="
            border:1px solid #e5e7eb;
            border-radius:10px;
            padding:20px;
        ">

            <h3 style="margin-bottom:15px;">
                ${shipment.awb}
            </h3>


            <div class="detail-grid">

                <div>
                    <strong>Order ID</strong>
                    <span>
                        ${shipment.orderId || "-"}
                    </span>
                </div>


                <div>
                    <strong>Customer</strong>
                    <span>
                        ${shipment.customerName || "-"}
                    </span>
                </div>


                <div>
                    <strong>Carrier</strong>
                    <span>
                        ${shipment.carrier || "-"}
                    </span>
                </div>


                <div>
                    <strong>Current Status</strong>
                    <span class="status">
                        ${shipment.status || "Created"}
                    </span>
                </div>

            </div>


            <div style="
                margin-top:25px;
                display:flex;
                gap:8px;
                flex-wrap:wrap;
            ">

                <button
                    class="small-button"
                    onclick="updateShipmentStatus('${shipment.awb}', 'Picked Up'); return false;">

                    Picked Up

                </button>


                <button
                    class="small-button"
                    onclick="updateShipmentStatus('${shipment.awb}', 'In Transit'); return false;">

                    In Transit

                </button>


                <button
                    class="small-button"
                    onclick="updateShipmentStatus('${shipment.awb}', 'Out for Delivery'); return false;">

                    Out for Delivery

                </button>


                <button
                    class="small-button"
                    onclick="updateShipmentStatus('${shipment.awb}', 'Delivered'); return false;">

                    Delivered

                </button>


                <button
                    class="small-button"
                    onclick="updateShipmentStatus('${shipment.awb}', 'NDR'); return false;">

                    NDR

                </button>

            </div>

        </div>

    `;

}


// ==========================================
// UPDATE SHIPMENT STATUS
// ==========================================

function updateShipmentStatus(awb, newStatus) {

    const shipments =
        JSON.parse(
            localStorage.getItem("miniflowShipments") || "[]"
        );


    const shipment =
        shipments.find(function(item) {

            return item.awb === awb;

        });


    if (!shipment) {

        alert("Shipment not found.");

        return;

    }


    shipment.status =
        newStatus;


    shipment.lastUpdated =
        new Date().toLocaleString();


    localStorage.setItem(
        "miniflowShipments",
        JSON.stringify(shipments)
    );


    renderTrackingResult(shipment);

}
// ==========================================
// NDR / NPR MODULE
// ==========================================

function openNDR() {

    const main =
        document.querySelector(".main");


    const shipments =
        JSON.parse(
            localStorage.getItem("miniflowShipments") || "[]"
        );


    const ndrShipments =
        shipments.filter(function(shipment) {

            return (
                shipment.status === "NDR" ||
                shipment.status === "Reattempt"
            );

        });


    const openNDRCount =
        shipments.filter(function(shipment) {

            return shipment.status === "NDR";

        }).length;


    const reattemptCount =
        shipments.filter(function(shipment) {

            return shipment.status === "Reattempt";

        }).length;


    const rtoCount =
        shipments.filter(function(shipment) {

            return shipment.status === "RTO";

        }).length;


    main.innerHTML = `

        <div class="page-header">

            <div>

                <h1>NDR / NPR</h1>

                <p>
                    Manage non-delivery shipments and reattempts
                </p>

            </div>

        </div>


        <div class="stats-grid">

            <div class="stat-card">

                <div class="stat-label">
                    Total NDR
                </div>

                <div class="stat-value">
                    ${ndrShipments.length}
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-label">
                    Open NDR
                </div>

                <div class="stat-value">
                    ${openNDRCount}
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-label">
                    Reattempt
                </div>

                <div class="stat-value">
                    ${reattemptCount}
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-label">
                    RTO
                </div>

                <div class="stat-value">
                    ${rtoCount}
                </div>

            </div>

        </div>


        <div class="panel">

            <h2>NDR Shipments</h2>


            <div style="
                overflow-x:auto;
            ">

                <table class="data-table">

                    <thead>

                        <tr>

                            <th>AWB</th>

                            <th>Order ID</th>

                            <th>Customer</th>

                            <th>Carrier</th>

                            <th>NDR Reason</th>

                            <th>Attempt</th>

                            <th>Status</th>

                            <th>Action</th>

                        </tr>

                    </thead>


                    <tbody>

                        ${
                            ndrShipments.length
                            ?

                            ndrShipments.map(function(shipment) {

                                return `

                                    <tr>

                                        <td>
                                            ${shipment.awb}
                                        </td>

                                        <td>
                                            ${shipment.orderId || "-"}
                                        </td>

                                        <td>
                                            ${shipment.customerName || "-"}
                                        </td>

                                        <td>
                                            ${shipment.carrier || "-"}
                                        </td>

                                        <td>

                                            <select
                                                onchange="changeNDRReason('${shipment.awb}', this.value)"
                                                style="
                                                    padding:7px;
                                                    border:1px solid #d1d5db;
                                                    border-radius:6px;
                                                "
                                            >

                                                <option value="">
                                                    Select reason
                                                </option>

                                                <option
                                                    ${
                                                        shipment.ndrReason ===
                                                        "Customer unavailable"
                                                        ? "selected"
                                                        : ""
                                                    }
                                                >
                                                    Customer unavailable
                                                </option>

                                                <option
                                                    ${
                                                        shipment.ndrReason ===
                                                        "Customer refused"
                                                        ? "selected"
                                                        : ""
                                                    }
                                                >
                                                    Customer refused
                                                </option>

                                                <option
                                                    ${
                                                        shipment.ndrReason ===
                                                        "Wrong address"
                                                        ? "selected"
                                                        : ""
                                                    }
                                                >
                                                    Wrong address
                                                </option>

                                                <option
                                                    ${
                                                        shipment.ndrReason ===
                                                        "Address incomplete"
                                                        ? "selected"
                                                        : ""
                                                    }
                                                >
                                                    Address incomplete
                                                </option>

                                                <option
                                                    ${
                                                        shipment.ndrReason ===
                                                        "Phone unreachable"
                                                        ? "selected"
                                                        : ""
                                                    }
                                                >
                                                    Phone unreachable
                                                </option>

                                                <option
                                                    ${
                                                        shipment.ndrReason ===
                                                        "COD customer unavailable"
                                                        ? "selected"
                                                        : ""
                                                    }
                                                >
                                                    COD customer unavailable
                                                </option>

                                            </select>

                                        </td>

                                        <td>
                                            ${shipment.ndrAttempt || 0}
                                        </td>

                                        <td>

                                            <span class="status">
                                                ${
                                                    shipment.status ||
                                                    "NDR"
                                                }
                                            </span>

                                        </td>

                                        <td>

                                            <button
                                                class="small-button"
                                                onclick="handleNDRAttempt('${shipment.awb}')">

                                                Reattempt

                                            </button>


                                            <button
                                                class="small-button danger-button"
                                                onclick="handleNDRRTO('${shipment.awb}')">

                                                RTO

                                            </button>

                                        </td>

                                    </tr>

                                `;

                            }).join("")

                            :

                            `

                                <tr>

                                    <td
                                        colspan="8"
                                        style="
                                            padding:40px;
                                            text-align:center;
                                            color:#64748b;
                                        "
                                    >

                                        No NDR shipments found.

                                    </td>

                                </tr>

                            `
                        }

                    </tbody>

                </table>

            </div>

        </div>

    `;


    addCommonStyles();

}


// ==========================================
// CHANGE NDR REASON
// ==========================================

function changeNDRReason(awb, reason) {

    const shipments =
        JSON.parse(
            localStorage.getItem("miniflowShipments") || "[]"
        );


    const shipment =
        shipments.find(function(item) {

            return item.awb === awb;

        });


    if (!shipment) {
        return;
    }


    shipment.ndrReason =
        reason;


    shipment.lastUpdated =
        new Date().toLocaleString();


    localStorage.setItem(
        "miniflowShipments",
        JSON.stringify(shipments)
    );

}


// ==========================================
// NDR REATTEMPT
// ==========================================

function handleNDRAttempt(awb) {

    const shipments =
        JSON.parse(
            localStorage.getItem("miniflowShipments") || "[]"
        );


    const shipment =
        shipments.find(function(item) {

            return item.awb === awb;

        });


    if (!shipment) {

        alert("Shipment not found.");

        return;

    }


    shipment.ndrAttempt =
        (shipment.ndrAttempt || 0) + 1;


    shipment.status =
        "Reattempt";


    shipment.lastUpdated =
        new Date().toLocaleString();


    localStorage.setItem(
        "miniflowShipments",
        JSON.stringify(shipments)
    );


    alert(
        "Reattempt updated successfully."
    );


    openNDR();

}


// ==========================================
// NDR TO RTO
// ==========================================

function handleNDRRTO(awb) {

    const shipments =
        JSON.parse(
            localStorage.getItem("miniflowShipments") || "[]"
        );


    const shipment =
        shipments.find(function(item) {

            return item.awb === awb;

        });


    if (!shipment) {

        alert("Shipment not found.");

        return;

    }


    shipment.status =
        "RTO";


    shipment.lastUpdated =
        new Date().toLocaleString();


    localStorage.setItem(
        "miniflowShipments",
        JSON.stringify(shipments)
    );


    alert(
        "Shipment moved to RTO."
    );


    openNDR();

}


// ==========================================
// REPORTS MODULE
// ==========================================

function openReports() {

    const main =
        document.querySelector(".main");


    const shipments =
        JSON.parse(
            localStorage.getItem("miniflowShipments") || "[]"
        );


    const total =
        shipments.length;


    const delivered =
        shipments.filter(function(shipment) {

            return shipment.status === "Delivered";

        }).length;


    const inTransit =
        shipments.filter(function(shipment) {

            return shipment.status === "In Transit";

        }).length;


    const ndr =
        shipments.filter(function(shipment) {

            return shipment.status === "NDR";

        }).length;


    const rto =
        shipments.filter(function(shipment) {

            return shipment.status === "RTO";

        }).length;


    const shipmentValue =
        shipments.reduce(function(totalValue, shipment) {

            return (
                totalValue +
                (
                    parseFloat(
                        shipment.invoiceValue
                    ) || 0
                )
            );

        }, 0);


    const carrierCounts = {};


    shipments.forEach(function(shipment) {

        const carrier =
            shipment.carrier || "Unknown";


        if (!carrierCounts[carrier]) {

            carrierCounts[carrier] = 0;

        }


        carrierCounts[carrier]++;

    });


    main.innerHTML = `

        <div class="page-header">

            <div>

                <h1>Reports</h1>

                <p>
                    Shipment and carrier performance
                </p>

            </div>

        </div>


        <div class="stats-grid">

            <div class="stat-card">

                <div class="stat-label">
                    Total Shipments
                </div>

                <div class="stat-value">
                    ${total}
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-label">
                    Delivered
                </div>

                <div class="stat-value">
                    ${delivered}
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-label">
                    In Transit
                </div>

                <div class="stat-value">
                    ${inTransit}
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-label">
                    NDR
                </div>

                <div class="stat-value">
                    ${ndr}
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-label">
                    RTO
                </div>

                <div class="stat-value">
                    ${rto}
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-label">
                    Shipment Value
                </div>

                <div class="stat-value">

                    ₹${shipmentValue.toLocaleString("en-IN")}

                </div>

            </div>

        </div>


        <div class="panel">

            <h2>Carrier Performance</h2>


            <table class="data-table">

                <thead>

                    <tr>

                        <th>Carrier</th>

                        <th>Shipment Count</th>

                    </tr>

                </thead>


                <tbody>

                    ${
                        Object.keys(carrierCounts).length

                        ?

                        Object.keys(carrierCounts)
                            .map(function(carrier) {

                                return `

                                    <tr>

                                        <td>
                                            ${carrier}
                                        </td>

                                        <td>
                                            ${carrierCounts[carrier]}
                                        </td>

                                    </tr>

                                `;

                            }).join("")

                        :

                        `

                            <tr>

                                <td
                                    colspan="2"
                                    style="
                                        text-align:center;
                                        padding:30px;
                                    "
                                >

                                    No shipment data available.

                                </td>

                            </tr>

                        `
                    }

                </tbody>

            </table>

        </div>

    `;


    addCommonStyles();

}


// ==========================================
// CARRIER MODULE
// ==========================================

function openCarriers() {

    const main =
        document.querySelector(".main");


    const shipments =
        JSON.parse(
            localStorage.getItem("miniflowShipments") || "[]"
        );


    const defaultCarriers = [

        {
            name: "Delhivery",
            service: "Surface",
            status: "Active"
        },

        {
            name: "Blue Dart",
            service: "Express",
            status: "Active"
        },

        {
            name: "DTDC",
            service: "Surface",
            status: "Active"
        },

        {
            name: "XpressBees",
            service: "Surface",
            status: "Active"
        },

        {
            name: "Ekart",
            service: "Express",
            status: "Inactive"
        }

    ];


    const savedCarriers =
        JSON.parse(
            localStorage.getItem("miniflowCarriers") || "[]"
        );


    const carriers =
        defaultCarriers.map(function(carrier) {

            const saved =
                savedCarriers.find(function(item) {

                    return item.name === carrier.name;

                });


            return saved || carrier;

        });


    savedCarriers.forEach(function(saved) {

        const exists =
            carriers.some(function(carrier) {

                return carrier.name === saved.name;

            });


        if (!exists) {

            carriers.push(saved);

        }

    });


    localStorage.setItem(
        "miniflowCarriers",
        JSON.stringify(carriers)
    );


    const activeCount =
        carriers.filter(function(carrier) {

            return carrier.status === "Active";

        }).length;


    const inactiveCount =
        carriers.filter(function(carrier) {

            return carrier.status === "Inactive";

        }).length;


    main.innerHTML = `

        <div class="page-header">

            <div>

                <h1>Carriers</h1>

                <p>
                    Manage shipping carriers
                </p>

            </div>


            <button
                class="primary-button"
                onclick="openAddCarrier()">

                + Add Carrier

            </button>

        </div>


        <div class="stats-grid">

            <div class="stat-card">

                <div class="stat-label">
                    Total Carriers
                </div>

                <div class="stat-value">
                    ${carriers.length}
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-label">
                    Active
                </div>

                <div class="stat-value">
                    ${activeCount}
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-label">
                    Inactive
                </div>

                <div class="stat-value">
                    ${inactiveCount}
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-label">
                    Total Shipments
                </div>

                <div class="stat-value">
                    ${shipments.length}
                </div>

            </div>

        </div>


        <div class="panel">

            <h2>Carrier List</h2>


            <div style="
                overflow-x:auto;
            ">

                <table class="data-table">

                    <thead>

                        <tr>

                            <th>Carrier</th>

                            <th>Service</th>

                            <th>Status</th>

                            <th>Shipments</th>

                            <th>Action</th>

                        </tr>

                    </thead>


                    <tbody>

                        ${
                            carriers.map(function(carrier) {

                                const shipmentCount =
                                    shipments.filter(function(shipment) {

                                        return (
                                            shipment.carrier ===
                                            carrier.name
                                        );

                                    }).length;


                                return `

                                    <tr>

                                        <td>
                                            <strong>
                                                ${carrier.name}
                                            </strong>
                                        </td>

                                        <td>
                                            ${carrier.service}
                                        </td>

                                        <td>

                                            <span class="status">

                                                ${carrier.status}

                                            </span>

                                        </td>

                                        <td>
                                            ${shipmentCount}
                                        </td>

                                        <td>

                                            <button
                                                class="small-button"
                                                onclick="openCarrierConfig('${carrier.name}')">

                                                Configure

                                            </button>

                                        </td>

                                    </tr>

                                `;

                            }).join("")
                        }

                    </tbody>

                </table>

            </div>

        </div>

    `;


    addCommonStyles();

}
// ==========================================
// CARRIER CONFIGURATION
// ==========================================

function openCarrierConfig(carrierName) {

    const main =
        document.querySelector(".main");


    const carriers =
        JSON.parse(
            localStorage.getItem("miniflowCarriers") || "[]"
        );


    const carrier =
        carriers.find(function(item) {

            return item.name === carrierName;

        }) || {

            name: carrierName,
            service: "Surface",
            status: "Active"

        };


    const config =
        JSON.parse(
            localStorage.getItem("miniflowCarrierConfigs") || "{}"
        );


    const savedConfig =
        config[carrierName] || {};


    main.innerHTML = `

        <div class="page-header">

            <div>

                <h1>${carrierName} Configuration</h1>

                <p>
                    Configure carrier settings for Miniflow
                </p>

            </div>

        </div>


        <div class="panel">

            <h2>Carrier Details</h2>


            <div class="form-grid">

                <div class="field">

                    <label>Carrier Name</label>

                    <input
                        id="carrierConfigName"
                        value="${carrierName}"
                        readonly>

                </div>


                <div class="field">

                    <label>Service Type</label>

                    <select id="carrierConfigService">

                        <option
                            ${
                                (
                                    savedConfig.service ||
                                    carrier.service
                                ) === "Surface"
                                ? "selected"
                                : ""
                            }
                        >
                            Surface
                        </option>

                        <option
                            ${
                                (
                                    savedConfig.service ||
                                    carrier.service
                                ) === "Express"
                                ? "selected"
                                : ""
                            }
                        >
                            Express
                        </option>

                        <option
                            ${
                                (
                                    savedConfig.service ||
                                    carrier.service
                                ) === "Air"
                                ? "selected"
                                : ""
                            }
                        >
                            Air
                        </option>

                    </select>

                </div>


                <div class="field">

                    <label>Account Name</label>

                    <input
                        id="accountName"
                        value="${savedConfig.accountName || ""}"
                        placeholder="Enter account name">

                </div>


                <div class="field">

                    <label>API Username</label>

                    <input
                        id="apiUsername"
                        value="${savedConfig.apiUsername || ""}"
                        placeholder="Enter API username">

                </div>


                <div class="field">

                    <label>API Password / Token</label>

                    <input
                        id="apiPassword"
                        type="password"
                        value="${savedConfig.apiPassword || ""}"
                        placeholder="Enter API password or token">

                </div>


                <div class="field">

                    <label>API URL</label>

                    <input
                        id="apiUrl"
                        value="${savedConfig.apiUrl || ""}"
                        placeholder="https://api.example.com">

                </div>

            </div>


            <h2 style="margin-top:30px;">
                Carrier Features
            </h2>


            <div style="
                display:grid;
                grid-template-columns:1fr 1fr;
                gap:15px;
                margin-top:15px;
            ">

                <label>

                    <input
                        type="checkbox"
                        id="featureAWB"
                        ${
                            savedConfig.awbGeneration !== false
                            ? "checked"
                            : ""
                        }>

                    AWB Generation

                </label>


                <label>

                    <input
                        type="checkbox"
                        id="featureTracking"
                        ${
                            savedConfig.tracking !== false
                            ? "checked"
                            : ""
                        }>

                    Tracking

                </label>


                <label>

                    <input
                        type="checkbox"
                        id="featureManifest"
                        ${
                            savedConfig.manifest
                            ? "checked"
                            : ""
                        }>

                    Manifest

                </label>


                <label>

                    <input
                        type="checkbox"
                        id="featureEPOD"
                        ${
                            savedConfig.ePOD
                            ? "checked"
                            : ""
                        }>

                    ePOD

                </label>

            </div>


            <div style="
                margin-top:30px;
                padding-top:20px;
                border-top:1px solid #e5e7eb;
                display:flex;
                gap:10px;
            ">

                <button
                    class="primary-button"
                    onclick="saveCarrierConfiguration('${carrierName}')">

                    Save Configuration

                </button>


                <button
                    class="secondary-button"
                    onclick="openCarriers()">

                    Back to Carriers

                </button>

            </div>

        </div>

    `;


    addCommonStyles();

}


// ==========================================
// SAVE CARRIER CONFIGURATION
// ==========================================

function saveCarrierConfiguration(carrierName) {

    const config =
        JSON.parse(
            localStorage.getItem("miniflowCarrierConfigs") || "{}"
        );


    config[carrierName] = {

        service:
            document.getElementById(
                "carrierConfigService"
            ).value,

        accountName:
            document.getElementById(
                "accountName"
            ).value,

        apiUsername:
            document.getElementById(
                "apiUsername"
            ).value,

        apiPassword:
            document.getElementById(
                "apiPassword"
            ).value,

        apiUrl:
            document.getElementById(
                "apiUrl"
            ).value,

        awbGeneration:
            document.getElementById(
                "featureAWB"
            ).checked,

        tracking:
            document.getElementById(
                "featureTracking"
            ).checked,

        manifest:
            document.getElementById(
                "featureManifest"
            ).checked,

        ePOD:
            document.getElementById(
                "featureEPOD"
            ).checked,

        updatedAt:
            new Date().toLocaleString()

    };


    localStorage.setItem(
        "miniflowCarrierConfigs",
        JSON.stringify(config)
    );


    alert(
        carrierName +
        " configuration saved successfully."
    );


    openCarrierConfig(carrierName);

}


// ==========================================
// ADD CARRIER
// ==========================================

function openAddCarrier() {

    const main =
        document.querySelector(".main");


    main.innerHTML = `

        <div class="page-header">

            <div>

                <h1>Add Carrier</h1>

                <p>
                    Add a new shipping carrier
                </p>

            </div>

        </div>


        <div class="panel">

            <h2>Carrier Details</h2>


            <div class="form-grid">

                <div class="field">

                    <label>Carrier Name *</label>

                    <input
                        id="newCarrierName"
                        placeholder="Example: Blue Dart">

                </div>


                <div class="field">

                    <label>Service Type *</label>

                    <select id="newCarrierService">

                        <option>
                            Surface
                        </option>

                        <option>
                            Express
                        </option>

                        <option>
                            Air
                        </option>

                    </select>

                </div>


                <div class="field">

                    <label>Status *</label>

                    <select id="newCarrierStatus">

                        <option>
                            Active
                        </option>

                        <option>
                            Inactive
                        </option>

                    </select>

                </div>

            </div>


            <div style="
                margin-top:30px;
                display:flex;
                gap:10px;
            ">

                <button
                    class="primary-button"
                    onclick="saveNewCarrier()">

                    Add Carrier

                </button>


                <button
                    class="secondary-button"
                    onclick="openCarriers()">

                    Cancel

                </button>

            </div>

        </div>

    `;


    addCommonStyles();

}


// ==========================================
// SAVE NEW CARRIER
// ==========================================

function saveNewCarrier() {

    const name =
        document
            .getElementById("newCarrierName")
            .value
            .trim();


    const service =
        document
            .getElementById("newCarrierService")
            .value;


    const status =
        document
            .getElementById("newCarrierStatus")
            .value;


    if (!name) {

        alert("Please enter carrier name.");

        return;

    }


    const carriers =
        JSON.parse(
            localStorage.getItem("miniflowCarriers") || "[]"
        );


    const exists =
        carriers.some(function(carrier) {

            return (
                carrier.name.toLowerCase() ===
                name.toLowerCase()
            );

        });


    if (exists) {

        alert("This carrier already exists.");

        return;

    }


    carriers.push({

        name: name,

        service: service,

        status: status

    });


    localStorage.setItem(
        "miniflowCarriers",
        JSON.stringify(carriers)
    );


    alert(
        name +
        " added successfully."
    );


    openCarriers();

}


// ==========================================
// CUSTOMERS MODULE
// ==========================================

function openCustomers() {

    const main =
        document.querySelector(".main");


    const shipments =
        JSON.parse(
            localStorage.getItem("miniflowShipments") || "[]"
        );


    const customers = [];


    shipments.forEach(function(shipment) {

        const name =
            shipment.customerName;


        if (!name) {
            return;
        }


        const exists =
            customers.find(function(customer) {

                return (
                    customer.name.toLowerCase() ===
                    name.toLowerCase()
                );

            });


        if (!exists) {

            customers.push({

                name: name,

                email:
                    shipment.customerEmail || "",

                phone:
                    shipment.customerPhone || "",

                status:
                    "Active"

            });

        }

    });


    main.innerHTML = `

        <div class="page-header">

            <div>

                <h1>Customers</h1>

                <p>
                    Manage your customers
                </p>

            </div>

        </div>


        <div class="stats-grid">

            <div class="stat-card">

                <div class="stat-label">
                    Total Customers
                </div>

                <div class="stat-value">
                    ${customers.length}
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-label">
                    Active Customers
                </div>

                <div class="stat-value">

                    ${
                        customers.filter(function(customer) {

                            return customer.status === "Active";

                        }).length
                    }

                </div>

            </div>


            <div class="stat-card">

                <div class="stat-label">
                    Total Shipments
                </div>

                <div class="stat-value">
                    ${shipments.length}
                </div>

            </div>

        </div>


        <div class="panel">

            <div style="
                display:flex;
                justify-content:space-between;
                align-items:center;
                margin-bottom:20px;
            ">

                <h2 style="margin:0;">
                    Customer List
                </h2>


                <button
                    class="primary-button"
                    onclick="openAddCustomer()">

                    + Add Customer

                </button>

            </div>


            <div style="
                overflow-x:auto;
            ">

                <table class="data-table">

                    <thead>

                        <tr>

                            <th>Customer</th>

                            <th>Email</th>

                            <th>Phone</th>

                            <th>Status</th>

                            <th>Shipments</th>

                        </tr>

                    </thead>


                    <tbody id="customerTableBody">

                        ${
                            customers.map(function(customer) {

                                const shipmentCount =
                                    shipments.filter(function(shipment) {

                                        return (
                                            shipment.customerName
                                            &&
                                            shipment.customerName
                                                .toLowerCase()
                                            ===
                                            customer.name
                                                .toLowerCase()
                                        );

                                    }).length;


                                return `

                                    <tr>

                                        <td>
                                            ${customer.name}
                                        </td>

                                        <td>
                                            ${customer.email || "-"}
                                        </td>

                                        <td>
                                            ${customer.phone || "-"}
                                        </td>

                                        <td>
                                            ${customer.status}
                                        </td>

                                        <td>
                                            ${shipmentCount}
                                        </td>

                                    </tr>

                                `;

                            }).join("")

                            ||

                            `

                                <tr>

                                    <td
                                        colspan="5"
                                        style="
                                            padding:30px;
                                            text-align:center;
                                            color:#64748b;
                                        "
                                    >

                                        No customers added yet.

                                    </td>

                                </tr>

                            `
                        }

                    </tbody>

                </table>

            </div>

        </div>

    `;


    addCommonStyles();

}


// ==========================================
// ADD CUSTOMER
// ==========================================

function openAddCustomer() {

    const main =
        document.querySelector(".main");


    main.innerHTML = `

        <div class="page-header">

            <div>

                <h1>Add Customer</h1>

                <p>
                    Add a new customer
                </p>

            </div>

        </div>


        <div class="panel">

            <h2>Customer Details</h2>


            <div class="form-grid">

                <div class="field">

                    <label>Customer Name *</label>

                    <input
                        id="newCustomerName"
                        placeholder="Customer name">

                </div>


                <div class="field">

                    <label>Email</label>

                    <input
                        id="newCustomerEmail"
                        type="email"
                        placeholder="customer@example.com">

                </div>


                <div class="field">

                    <label>Phone</label>

                    <input
                        id="newCustomerPhone"
                        type="tel"
                        placeholder="10 digit mobile number">

                </div>

            </div>


            <div style="
                margin-top:30px;
                display:flex;
                gap:10px;
            ">

                <button
                    class="primary-button"
                    onclick="saveNewCustomer()">

                    Add Customer

                </button>


                <button
                    class="secondary-button"
                    onclick="openCustomers()">

                    Cancel

                </button>

            </div>

        </div>

    `;


    addCommonStyles();

}


// ==========================================
// SAVE CUSTOMER
// ==========================================

function saveNewCustomer() {

    const name =
        document
            .getElementById("newCustomerName")
            .value
            .trim();


    const email =
        document
            .getElementById("newCustomerEmail")
            .value
            .trim();


    const phone =
        document
            .getElementById("newCustomerPhone")
            .value
            .trim();


    if (!name) {

        alert("Please enter customer name.");

        return;

    }


    const customers =
        JSON.parse(
            localStorage.getItem("miniflowCustomers") || "[]"
        );


    const exists =
        customers.some(function(customer) {

            return (
                customer.name.toLowerCase() ===
                name.toLowerCase()
            );

        });


    if (exists) {

        alert("This customer already exists.");

        return;

    }


    customers.push({

        name: name,

        email: email,

        phone: phone,

        status: "Active",

        createdAt:
            new Date().toLocaleString()

    });


    localStorage.setItem(
        "miniflowCustomers",
        JSON.stringify(customers)
    );


    alert(
        name +
        " added successfully."
    );


    openCustomers();

}


// ==========================================
// SETTINGS
// ==========================================

function openSettings() {

    const main =
        document.querySelector(".main");


    const settings =
        JSON.parse(
            localStorage.getItem("miniflowSettings") || "{}"
        );


    main.innerHTML = `

        <div class="page-header">

            <div>

                <h1>Settings</h1>

                <p>
                    Manage Miniflow application settings
                </p>

            </div>

        </div>


        <div class="panel">

            <h2>General Settings</h2>


            <div class="form-grid">

                <div class="field">

                    <label>Company Name</label>

                    <input
                        id="settingCompanyName"
                        value="${settings.companyName || "Miniflow"}">

                </div>


                <div class="field">

                    <label>Default Currency</label>

                    <select id="settingCurrency">

                        <option
                            ${
                                (settings.currency || "INR")
                                === "INR"
                                ? "selected"
                                : ""
                            }
                        >
                            INR
                        </option>

                        <option
                            ${
                                settings.currency === "USD"
                                ? "selected"
                                : ""
                            }
                        >
                            USD
                        </option>

                    </select>

                </div>


                <div class="field">

                    <label>Default Service</label>

                    <select id="settingService">

                        <option
                            ${
                                (settings.service || "Surface")
                                === "Surface"
                                ? "selected"
                                : ""
                            }
                        >
                            Surface
                        </option>

                        <option
                            ${
                                settings.service === "Express"
                                ? "selected"
                                : ""
                            }
                        >
                            Express
                        </option>

                        <option
                            ${
                                settings.service === "Air"
                                ? "selected"
                                : ""
                            }
                        >
                            Air
                        </option>

                    </select>

                </div>

            </div>


            <div style="
                margin-top:30px;
            ">

                <button
                    class="primary-button"
                    onclick="saveSettings()">

                    Save Settings

                </button>

            </div>

        </div>


        <div class="panel" style="margin-top:20px;">

            <h2>Data Management</h2>


            <p style="
                color:#64748b;
                margin-bottom:20px;
            ">

                These actions affect the local demo data stored
                in your browser.

            </p>


            <button
                class="danger-button"
                onclick="clearDemoData()">

                Clear Demo Shipment Data

            </button>

        </div>

    `;


    addCommonStyles();

}
// ==========================================
// SAVE SETTINGS
// ==========================================

function saveSettings() {

    const companyName =
        document
            .getElementById("settingCompanyName")
            .value
            .trim();


    const currency =
        document
            .getElementById("settingCurrency")
            .value;


    const service =
        document
            .getElementById("settingService")
            .value;


    if (!companyName) {

        alert("Please enter company name.");

        return;

    }


    const settings = {

        companyName: companyName,

        currency: currency,

        service: service,

        updatedAt:
            new Date().toLocaleString()

    };


    localStorage.setItem(
        "miniflowSettings",
        JSON.stringify(settings)
    );


    alert("Settings saved successfully.");

}


// ==========================================
// CLEAR DEMO DATA
// ==========================================

function clearDemoData() {

    const confirmClear =
        confirm(
            "Are you sure you want to clear all demo shipment data?"
        );


    if (!confirmClear) {

        return;

    }


    localStorage.removeItem(
        "miniflowShipments"
    );


    alert(
        "Demo shipment data cleared successfully."
    );


    location.reload();

}


// ==========================================
// DASHBOARD
// ==========================================

function updateDashboardKPIs() {

    const shipments =
        JSON.parse(
            localStorage.getItem("miniflowShipments") || "[]"
        );


    const total =
        shipments.length;


    const delivered =
        shipments.filter(function(shipment) {

            return shipment.status === "Delivered";

        }).length;


    const inTransit =
        shipments.filter(function(shipment) {

            return (
                shipment.status === "In Transit"
                ||
                shipment.status === "Picked Up"
                ||
                shipment.status === "Out for Delivery"
            );

        }).length;


    const ndr =
        shipments.filter(function(shipment) {

            return (
                shipment.status === "NDR"
                ||
                shipment.status === "Reattempt"
            );

        }).length;


    const totalElement =
        document.getElementById(
            "dashboardTotalShipments"
        );


    const deliveredElement =
        document.getElementById(
            "dashboardDelivered"
        );


    const inTransitElement =
        document.getElementById(
            "dashboardInTransit"
        );


    const ndrElement =
        document.getElementById(
            "dashboardNDR"
        );


    if (totalElement) {

        totalElement.textContent = total;

    }


    if (deliveredElement) {

        deliveredElement.textContent = delivered;

    }


    if (inTransitElement) {

        inTransitElement.textContent = inTransit;

    }


    if (ndrElement) {

        ndrElement.textContent = ndr;

    }

}


// ==========================================
// DASHBOARD RECENT ACTIVITY
// ==========================================

function updateDashboardRecentActivity() {

    const container =
        document.getElementById(
            "dashboardRecentActivity"
        );


    if (!container) {

        return;

    }


    const shipments =
        JSON.parse(
            localStorage.getItem("miniflowShipments") || "[]"
        );


    if (!shipments.length) {

        container.innerHTML = `

            <div class="activity">

                No shipment activity available.

            </div>

        `;

        return;

    }


    const sortedShipments =
        shipments.slice().sort(function(a, b) {

            return (
                new Date(b.lastUpdated || b.createdAt)
                -
                new Date(a.lastUpdated || a.createdAt)
            );

        });


    const recent =
        sortedShipments.slice(0, 4);


    container.innerHTML = recent.map(function(shipment) {

        return `

            <div
                class="activity"
                style="
                    cursor:pointer;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    gap:15px;
                "
                onclick="openShipmentDetails('${shipment.awb}')"
            >

                <div>

                    <strong>
                        ${shipment.awb}
                    </strong>

                    <div style="
                        font-size:13px;
                        color:#64748b;
                        margin-top:4px;
                    ">

                        ${shipment.customerName || "Customer"}

                    </div>

                </div>


                <div style="
                    text-align:right;
                ">

                    <div style="
                        font-weight:600;
                    ">

                        ${shipment.status}

                    </div>

                    <div style="
                        font-size:12px;
                        color:#94a3b8;
                        margin-top:4px;
                    ">

                        ${shipment.lastUpdated || ""}

                    </div>

                </div>

            </div>

        `;

    }).join("");

}


// ==========================================
// DASHBOARD SHIPMENT VOLUME
// ==========================================

function updateDashboardShipmentVolume() {

    const chart =
        document.getElementById(
            "shipmentVolumeChart"
        );


    if (!chart) {

        return;

    }


    const shipments =
        JSON.parse(
            localStorage.getItem("miniflowShipments") || "[]"
        );


    const months = [

        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep"

    ];


    const counts = {

        Apr: 0,
        May: 0,
        Jun: 0,
        Jul: 0,
        Aug: 0,
        Sep: 0

    };


    shipments.forEach(function(shipment) {

        let dateValue =
            shipment.orderDate ||
            shipment.createdAt;


        if (!dateValue) {

            return;

        }


        let date =
            new Date(dateValue);


        if (isNaN(date.getTime())) {

            const match =
                String(dateValue).match(
                    /^(\d{1,2})[\/-](\d{1,2})[\/-](\d{4})$/
                );


            if (match) {

                date =
                    new Date(
                        Number(match[3]),
                        Number(match[2]) - 1,
                        Number(match[1])
                    );

                }

        }


        if (isNaN(date.getTime())) {

            return;

        }


        const month =
            date.toLocaleString(
                "en-US",
                {
                    month: "short"
                }
            );


        if (
            Object.prototype.hasOwnProperty.call(
                counts,
                month
            )
        ) {

            counts[month]++;

        }

    });


    const max =
        Math.max(
            1,
            ...Object.values(counts)
        );


    chart.innerHTML = months.map(function(month) {

        const height =
            Math.max(
                20,
                Math.round(
                    (counts[month] / max) * 160
                )
            );


        return `

            <div
                class="bar"
                style="
                    height:${height}px;
                    position:relative;
                "
                title="${month}: ${counts[month]} shipments"
            >

                <span style="
                    position:absolute;
                    bottom:-24px;
                    left:50%;
                    transform:translateX(-50%);
                    font-size:11px;
                    color:#64748b;
                ">

                    ${month}

                </span>

            </div>

        `;

    }).join("");

}


// ==========================================
// DASHBOARD INITIALIZATION
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateDashboardKPIs();

        updateDashboardRecentActivity();

        updateDashboardShipmentVolume();

    }
);
// ==========================================
// COMMON STYLES
// ==========================================

function addCommonStyles() {

    if (document.getElementById("miniflowDynamicStyles")) {
        return;
    }


    const style =
        document.createElement("style");


    style.id =
        "miniflowDynamicStyles";


    style.textContent = `

        .page-header {
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:25px;
        }


        .page-header h1 {
            margin:0 0 6px 0;
            font-size:28px;
            color:#0f172a;
        }


        .page-header p {
            margin:0;
            color:#64748b;
        }


        .panel {
            background:#ffffff;
            border:1px solid #e2e8f0;
            border-radius:12px;
            padding:24px;
            box-shadow:0 2px 8px rgba(15,23,42,0.04);
        }


        .panel h2 {
            margin-top:0;
            margin-bottom:20px;
            color:#0f172a;
        }


        .stats-grid {
            display:grid;
            grid-template-columns:
                repeat(4, minmax(0, 1fr));
            gap:18px;
            margin-bottom:25px;
        }


        .stat-card {
            background:#ffffff;
            border:1px solid #e2e8f0;
            border-radius:12px;
            padding:20px;
            box-shadow:0 2px 8px rgba(15,23,42,0.04);
        }


        .stat-label {
            color:#64748b;
            font-size:14px;
            margin-bottom:8px;
        }


        .stat-value {
            font-size:28px;
            font-weight:700;
            color:#0f172a;
        }


        .form-grid {
            display:grid;
            grid-template-columns:
                repeat(2, minmax(0, 1fr));
            gap:20px;
        }


        .field {
            display:flex;
            flex-direction:column;
            gap:7px;
        }


        .field label {
            font-size:14px;
            font-weight:600;
            color:#334155;
        }


        .field input,
        .field select,
        .field textarea {

            width:100%;
            box-sizing:border-box;
            padding:11px 12px;
            border:1px solid #cbd5e1;
            border-radius:8px;
            background:#ffffff;
            color:#0f172a;
            font-size:14px;
            outline:none;

        }


        .field input:focus,
        .field select:focus,
        .field textarea:focus {

            border-color:#2563eb;
            box-shadow:
                0 0 0 3px
                rgba(37,99,235,0.10);

        }


        .field textarea {
            min-height:90px;
            resize:vertical;
        }


        .primary-button {

            border:none;
            border-radius:8px;
            padding:11px 18px;
            background:#2563eb;
            color:#ffffff;
            font-size:14px;
            font-weight:600;
            cursor:pointer;

        }


        .primary-button:hover {
            opacity:0.9;
        }


        .secondary-button {

            border:1px solid #cbd5e1;
            border-radius:8px;
            padding:11px 18px;
            background:#ffffff;
            color:#334155;
            font-size:14px;
            font-weight:600;
            cursor:pointer;

        }


        .secondary-button:hover {
            background:#f8fafc;
        }


        .danger-button {

            border:none;
            border-radius:8px;
            padding:11px 18px;
            background:#dc2626;
            color:#ffffff;
            font-size:14px;
            font-weight:600;
            cursor:pointer;

        }


        .danger-button:hover {
            opacity:0.9;
        }


        .data-table {

            width:100%;
            border-collapse:collapse;
            font-size:14px;

        }


        .data-table th {

            text-align:left;
            padding:13px 12px;
            background:#f8fafc;
            border-bottom:1px solid #e2e8f0;
            color:#475569;
            font-weight:600;

        }


        .data-table td {

            padding:14px 12px;
            border-bottom:1px solid #e2e8f0;
            color:#334155;

        }


        .data-table tr:hover td {
            background:#f8fafc;
        }


        .status-badge {

            display:inline-block;
            padding:5px 9px;
            border-radius:999px;
            font-size:12px;
            font-weight:600;
            background:#eff6ff;
            color:#1d4ed8;

        }


        .status-delivered {

            background:#ecfdf5;
            color:#047857;

        }


        .status-ndr {

            background:#fff7ed;
            color:#c2410c;

        }


        .status-rto {

            background:#fef2f2;
            color:#b91c1c;

        }


        .status-inactive {

            background:#f1f5f9;
            color:#64748b;

        }


        .action-button {

            border:1px solid #cbd5e1;
            border-radius:7px;
            padding:7px 11px;
            background:#ffffff;
            color:#334155;
            cursor:pointer;
            font-size:12px;
            margin-right:5px;

        }


        .action-button:hover {
            background:#f8fafc;
        }


        .activity {

            padding:15px 0;
            border-bottom:1px solid #e2e8f0;

        }


        .activity:last-child {
            border-bottom:none;
        }


        .tracking-timeline {

            position:relative;
            margin-top:25px;
            padding-left:25px;

        }


        .tracking-item {

            position:relative;
            padding:0 0 25px 25px;
            border-left:2px solid #dbeafe;

        }


        .tracking-item:last-child {
            border-left:2px solid transparent;
        }


        .tracking-dot {

            position:absolute;
            left:-7px;
            top:0;
            width:12px;
            height:12px;
            border-radius:50%;
            background:#2563eb;
            border:3px solid #dbeafe;

        }


        .tracking-title {

            font-weight:700;
            color:#0f172a;
            margin-bottom:5px;

        }


        .tracking-time {

            font-size:12px;
            color:#64748b;

        }


        .empty-state {

            padding:40px 20px;
            text-align:center;
            color:#64748b;

        }


        @media (max-width:900px) {

            .stats-grid {
                grid-template-columns:
                    repeat(2, minmax(0, 1fr));
            }


            .form-grid {
                grid-template-columns:1fr;
            }

        }


        @media (max-width:600px) {

            .stats-grid {
                grid-template-columns:1fr;
            }


            .page-header {
                align-items:flex-start;
                gap:15px;
                flex-direction:column;
            }

        }

    `;


    document.head.appendChild(style);

}


// ==========================================
// STATUS BADGE
// ==========================================

function getStatusBadge(status) {

    let className =
        "status-badge";


    if (status === "Delivered") {

        className +=
            " status-delivered";

    }


    if (
        status === "NDR"
        ||
        status === "Reattempt"
    ) {

        className +=
            " status-ndr";

    }


    if (status === "RTO") {

        className +=
            " status-rto";

    }


    if (status === "Inactive") {

        className +=
            " status-inactive";

    }


    return `

        <span class="${className}">

            ${status || "-"}

        </span>

    `;

}


// ==========================================
// FORMAT CURRENCY
// ==========================================

function formatCurrency(value) {

    const number =
        Number(value) || 0;


    return new Intl.NumberFormat(
        "en-IN",
        {
            style:"currency",
            currency:"INR",
            maximumFractionDigits:2
        }
    ).format(number);

}


// ==========================================
// FORMAT NUMBER
// ==========================================

function formatNumber(value) {

    const number =
        Number(value) || 0;


    return new Intl.NumberFormat(
        "en-IN"
    ).format(number);

}


// ==========================================
// SAFE TEXT
// ==========================================

function safeText(value) {

    if (
        value === undefined
        ||
        value === null
        ||
        value === ""
    ) {

        return "-";

    }


    return String(value);

}


// ==========================================
// UPDATE ACTIVE MENU
// ==========================================

function setActiveMenu(menuText) {

    const menuItems =
        document.querySelectorAll(
            ".menu-item"
        );


    menuItems.forEach(function(item) {

        item.classList.remove("active");


        if (
            item.textContent
                .trim()
                .includes(menuText)
        ) {

            item.classList.add("active");

        }

    });

}


// ==========================================
// INITIAL COMMON STYLE LOAD
// ==========================================

addCommonStyles();
// ==========================================
// FIX ACTIVE MENU
// ==========================================

function activateMenu(menuText) {

    const items =
        document.querySelectorAll(".menu-item");


    items.forEach(function(item) {

        item.classList.remove("active");


        if (
            item.textContent
                .trim()
                .includes(menuText)
        ) {

            item.classList.add("active");

        }

    });

}


// ==========================================
// UPDATE MENU WHEN MODULE OPENS
// ==========================================

const originalOpenCreateShipment =
    window.openCreateShipment;


const originalOpenShipments =
    window.openShipments;


const originalOpenTracking =
    window.openTracking;


const originalOpenNDR =
    window.openNDR;


const originalOpenReports =
    window.openReports;


const originalOpenCarriers =
    window.openCarriers;


const originalOpenCustomers =
    window.openCustomers;


const originalOpenSettings =
    window.openSettings;


// ==========================================
// SHIPMENT SEARCH
// ==========================================

function searchShipments() {

    const input =
        document.getElementById(
            "shipmentSearch"
        );


    const table =
        document.getElementById(
            "shipmentTableBody"
        );


    if (!input || !table) {

        return;

    }


    const search =
        input.value
            .trim()
            .toLowerCase();


    const shipments =
        JSON.parse(
            localStorage.getItem(
                "miniflowShipments"
            ) || "[]"
        );


    const filtered =
        shipments.filter(function(shipment) {

            return (

                safeText(shipment.awb)
                    .toLowerCase()
                    .includes(search)

                ||

                safeText(shipment.orderId)
                    .toLowerCase()
                    .includes(search)

                ||

                safeText(shipment.customerName)
                    .toLowerCase()
                    .includes(search)

                ||

                safeText(shipment.carrier)
                    .toLowerCase()
                    .includes(search)

            );

        });


    if (!filtered.length) {

        table.innerHTML = `

            <tr>

                <td
                    colspan="9"
                    class="empty-state"
                >

                    No shipments found.

                </td>

            </tr>

        `;

        return;

    }


    table.innerHTML =
        filtered.map(function(shipment) {

            return `

                <tr>

                    <td>

                        <strong>
                            ${safeText(shipment.awb)}
                        </strong>

                    </td>


                    <td>
                        ${safeText(shipment.orderId)}
                    </td>


                    <td>
                        ${safeText(shipment.customerName)}
                    </td>


                    <td>
                        ${safeText(shipment.carrier)}
                    </td>


                    <td>
                        ${safeText(shipment.service)}
                    </td>


                    <td>
                        ${safeText(shipment.chargeableWeight)} kg
                    </td>


                    <td>
                        ${getStatusBadge(shipment.status)}
                    </td>


                    <td>
                        ${safeText(shipment.lastUpdated)}
                    </td>


                    <td>

                        <button
                            class="action-button"
                            onclick="openShipmentDetails('${shipment.awb}')"
                        >

                            View

                        </button>


                        <button
                            class="action-button"
                            onclick="openTrackingForAWB('${shipment.awb}')"
                        >

                            Track

                        </button>

                    </td>

                </tr>

            `;

        }).join("");

}


// ==========================================
// SHIPMENT FILTER
// ==========================================

function filterShipments() {

    const statusFilter =
        document.getElementById(
            "shipmentStatusFilter"
        );


    const carrierFilter =
        document.getElementById(
            "shipmentCarrierFilter"
        );


    const table =
        document.getElementById(
            "shipmentTableBody"
        );


    if (!table) {

        return;

    }


    const status =
        statusFilter
            ? statusFilter.value
            : "All";


    const carrier =
        carrierFilter
            ? carrierFilter.value
            : "All";


    const shipments =
        JSON.parse(
            localStorage.getItem(
                "miniflowShipments"
            ) || "[]"
        );


    const filtered =
        shipments.filter(function(shipment) {

            const statusMatch =
                status === "All"
                ||
                shipment.status === status;


            const carrierMatch =
                carrier === "All"
                ||
                shipment.carrier === carrier;


            return (
                statusMatch &&
                carrierMatch
            );

        });


    if (!filtered.length) {

        table.innerHTML = `

            <tr>

                <td
                    colspan="9"
                    class="empty-state"
                >

                    No shipments found.

                </td>

            </tr>

        `;

        return;

    }


    table.innerHTML =
        filtered.map(function(shipment) {

            return `

                <tr>

                    <td>
                        <strong>
                            ${safeText(shipment.awb)}
                        </strong>
                    </td>

                    <td>
                        ${safeText(shipment.orderId)}
                    </td>

                    <td>
                        ${safeText(shipment.customerName)}
                    </td>

                    <td>
                        ${safeText(shipment.carrier)}
                    </td>

                    <td>
                        ${safeText(shipment.service)}
                    </td>

                    <td>
                        ${safeText(shipment.chargeableWeight)} kg
                    </td>

                    <td>
                        ${getStatusBadge(shipment.status)}
                    </td>

                    <td>
                        ${safeText(shipment.lastUpdated)}
                    </td>

                    <td>

                        <button
                            class="action-button"
                            onclick="openShipmentDetails('${shipment.awb}')"
                        >

                            View

                        </button>


                        <button
                            class="action-button"
                            onclick="openTrackingForAWB('${shipment.awb}')"
                        >

                            Track

                        </button>

                    </td>

                </tr>

            `;

        }).join("");

}


// ==========================================
// CARRIER OPTIONS
// ==========================================

function getCarrierOptions() {

    const defaultCarriers = [

        {
            name:"Delhivery",
            service:"Surface",
            status:"Active"
        },

        {
            name:"Blue Dart Express",
            service:"Express",
            status:"Active"
        },

        {
            name:"DTDC",
            service:"Surface",
            status:"Active"
        },

        {
            name:"XpressBees",
            service:"Surface",
            status:"Active"
        },

        {
            name:"Ekart Express",
            service:"Express",
            status:"Inactive"
        }

    ];


    const saved =
        JSON.parse(
            localStorage.getItem(
                "miniflowCarriers"
            ) || "[]"
        );


    const merged = [];


    defaultCarriers
        .concat(saved)
        .forEach(function(carrier) {

            const exists =
                merged.some(function(item) {

                    return (
                        item.name ===
                        carrier.name
                    );

                });


            if (!exists) {

                merged.push(carrier);

            }

        });


    return merged;

}


// ==========================================
// CREATE CARRIER SELECT OPTIONS
// ==========================================

function populateCarrierSelect(selectId) {

    const select =
        document.getElementById(selectId);


    if (!select) {

        return;

    }


    const carriers =
        getCarrierOptions();


    select.innerHTML = carriers
        .filter(function(carrier) {

            return carrier.status !== "Inactive";

        })
        .map(function(carrier) {

            return `

                <option value="${carrier.name}">

                    ${carrier.name}

                </option>

            `;

        })
        .join("");

}


// ==========================================
// UPDATE DASHBOARD AFTER DATA CHANGE
// ==========================================

function refreshDashboard() {

    updateDashboardKPIs();

    updateDashboardRecentActivity();

    updateDashboardShipmentVolume();

}


// ==========================================
// PAGE LOAD
// ==========================================

window.addEventListener(
    "load",
    function() {

        refreshDashboard();

    }
);


// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log(
    "Miniflow app.js loaded successfully."
);
// ==========================================
// FINAL INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // Make sure common styles are available
    addCommonStyles();

    // Refresh dashboard values
    updateDashboardKPIs();

    updateDashboardRecentActivity();

    updateDashboardShipmentVolume();

});


// ==========================================
// MINIFLOW READY
// ==========================================

console.log("==================================");
console.log("MINIFLOW APPLICATION READY");
console.log("==================================");