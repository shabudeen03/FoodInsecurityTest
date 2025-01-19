import "../../assets/stylesheets/dashboard.css";
import informational from "../../assets/images/dashboard/informational.png";
import { useState } from "react";

function DashboardMain({ toggleFilters }) {
    return (<div>
        <h1>Stony Brook University Food Pantry</h1>
        <h2>Inventory</h2>
        <div className="dashboard_filter_btns">
            <button id="dashboard_filter_toggle" onClick={toggleFilters}>Filter</button>
            <button id="dashboard_change_pantry">Change Pantry</button>
        </div>

        <hr />
    </div>);
}

function DashboardFilter({ componentId, componentValue }) {
    if(componentValue === "") componentValue = "Not Set.";

    return (
        <div id={componentId}>{componentValue}</div>
    );
}

function FilterContainerHelp({ tooltip_text, filter_desc, spanTooltip, spanTooltipText }) {
    return (<p>
        <span className="tooltip" id={spanTooltip}>
            <img className="dash_info_icon" src={informational} />
            <span className="tooltip_text" id={spanTooltipText}> {tooltip_text} </span>
        </span>

        {filter_desc}
    </p>);
}

function DashboardFilters({ itemSearch }) {
    const [query, setQuery] = useState({ name:"", qty:"", desc:"" });
    const [input_placeholders, setInputPlaceholders] = useState({name:"milk", qty:"2", desc:"calcium dairy protein"});


    const search = (event) => {
        event.preventDefault();
        const query_name = event.target.form.name.value;
        const query_qty = event.target.form.qty.value;
        const query_desc = event.target.form.desc.value;

        setQuery({ name: query_name, qty: query_qty, desc: query_desc});
        itemSearch(query_name, query_qty, query_desc);
        clearInputFields();
    }

    const clearInputFields = () => {
        const newPlaceholders = { name:"", qty:"", desc:"" };
        setInputPlaceholders(newPlaceholders);
    }

    const handleUIchange = (event) => {
        setInputPlaceholders({ ...input_placeholders, [event.target.name] : event.target.value });
    };

    return (<>
    <div id="filters"> 
        <h2>Filters</h2>
        <h3>Find What You Want</h3>
        <div className="dashboard_filter_box">
            <form id="filter_presets" method="post">
                <div className="dashboard_filter_container">
                    <label>Item Name</label> <br />
                    <input id="dash_name_search" name="name" type="text" value={input_placeholders.name} onChange={handleUIchange} />
                    
                    <FilterContainerHelp filter_desc="Search: " spanTooltip="dash_search_tooltip" spanTooltipText="dash_search_tooltip_text" tooltip_text="Enter item name, which matches name against the Item Name column." />
                    <DashboardFilter componentId="dashboard_search_filter" componentValue={query.name} />
                </div>

                <div className="dashboard_filter_container">
                    <label>Item Quantity</label> <br />
                    <input id="dash_qty_search" name="qty" type="text" value={input_placeholders.qty} onChange={handleUIchange} /> 
                    
                    <FilterContainerHelp spanTooltip="dash_qty_tooltip" spanTooltipText="dash_qty_tooltip_text" filter_desc="Minimum: " tooltip_text="Enter a number only to specify minimum quantity that you are looking for." />
                    <DashboardFilter componentId="dashboard_qty_filter" componentValue={query.qty} />
                </div>

                <div className="dashboard_filter_container">
                    <label>Item Description</label> <br />
                    <input id="dash_desc_search" name="desc" type="text" value={input_placeholders.desc} onChange={handleUIchange} />
                    
                    <FilterContainerHelp spanTooltip="dash_desc_tooltip" spanTooltipText="dash_desc_tooltip_text" filter_desc="Tags: " tooltip_text="Enter keywords separated by space to match against item description." />
                    
                    <DashboardFilter componentId="dashboard_desc_filter" componentValue={query.desc} />
                </div>

                <br /> <br />
                <div className="dashboard_filter_container">
                    <input type="submit" value="Search" onClick={search}/>
                    <button type="button" id="dashboard_clear_filters" onClick={clearInputFields}>Clear Filters</button>    
                </div>
            </form>
        </div>        
    </div>

    <hr />
    </>);
}


function DashboardPage() {
    const initialItems = [
        {
            itemName: "Milk",
            itemId: 1,
            itemQuantity: 10,
            itemDescription: ["Dairy", "Calcium-rich", "High Protein", "Low Fat"]
        },
        {
            itemName: "Chocolate Bar",
            itemId: 2,
            itemQuantity: 25,
            itemDescription: ["Snack", "High Sugar", "Contains Dairy", "Contains Nuts"]
        },
        {
            itemName: "Canned Beans",
            itemId: 3,
            itemQuantity: 40,
            itemDescription: ["High Fiber", "Protein-rich", "Low Fat", "Vegan"]
        },
        {
            itemName: "Rice",
            itemId: 4,
            itemQuantity: 50,
            itemDescription: ["Gluten-free", "Carbohydrates", "Low Sodium", "Versatile"]
        },
        {
            itemName: "Peanut Butter",
            itemId: 5,
            itemQuantity: 30,
            itemDescription: ["Protein-rich", "Contains Nuts", "High Calories", "Gluten-free"]
        },
        {
            itemName: "Cereal",
            itemId: 6,
            itemQuantity: 20,
            itemDescription: ["Whole Grains", "Fortified with Vitamins", "Low Fat", "Quick Breakfast"]
        },
        {
            itemName: "Canned Tuna",
            itemId: 7,
            itemQuantity: 35,
            itemDescription: ["Protein-rich", "Low Fat", "Omega-3 Fatty Acids", "Low Carb"]
        },
        {
            itemName: "Pasta",
            itemId: 8,
            itemQuantity: 45,
            itemDescription: ["Carbohydrates", "Quick Cooking", "Low Sodium", "Budget-friendly"]
        },
        {
            itemName: "Tomato Sauce",
            itemId: 9,
            itemQuantity: 25,
            itemDescription: ["Vegan", "Low Calorie", "Rich in Vitamin C", "No Artificial Additives"]
        },
        {
            itemName: "Bread",
            itemId: 10,
            itemQuantity: 20,
            itemDescription: ["Whole Grain", "Low Fat", "Contains Gluten", "Good Fiber"]
        },
        {
            itemName: "Applesauce",
            itemId: 11,
            itemQuantity: 15,
            itemDescription: ["No Added Sugar", "Low Calorie", "Rich in Vitamin C", "Kid-friendly"]
        },
        {
            itemName: "Oatmeal",
            itemId: 12,
            itemQuantity: 30,
            itemDescription: ["Whole Grain", "High Fiber", "Low Fat", "Heart Healthy"]
        },
        {
            itemName: "Vegetable Oil",
            itemId: 13,
            itemQuantity: 10,
            itemDescription: ["Rich in Healthy Fats", "Cooking Essential", "No Trans Fat", "High Calorie"]
        },
        {
            itemName: "Canned Corn",
            itemId: 14,
            itemQuantity: 25,
            itemDescription: ["Gluten-free", "High Fiber", "Naturally Sweet", "Low Fat"]
        },
        {
            itemName: "Canned Soup",
            itemId: 15,
            itemQuantity: 20,
            itemDescription: ["Convenient", "Ready-to-Eat", "Low Fat Options", "Rich in Sodium"]
        },
        {
            itemName: "Instant Noodles",
            itemId: 16,
            itemQuantity: 50,
            itemDescription: ["Quick Meal", "High Sodium", "Carbohydrates", "Budget-friendly"]
        },
        {
            itemName: "Granola Bars",
            itemId: 17,
            itemQuantity: 40,
            itemDescription: ["Snack", "Whole Grains", "Portable", "Contains Nuts"]
        },
        {
            itemName: "Canned Vegetables",
            itemId: 18,
            itemQuantity: 30,
            itemDescription: ["Vegan", "Rich in Vitamins", "Low Calorie", "High Fiber"]
        },
        {
            itemName: "Flour",
            itemId: 19,
            itemQuantity: 25,
            itemDescription: ["Baking Essential", "Contains Gluten", "Carbohydrates", "Versatile"]
        },
        {
            itemName: "Sugar",
            itemId: 20,
            itemQuantity: 15,
            itemDescription: ["Sweetener", "High Calorie", "No Fiber", "Cooking Essential"]
        }
    ];

    // showFilterPresets is a boolean state used to either display filter presets or not
    const [showFilterPresets, setShowFilterPresets] = useState(true);
    const [items, setItems] = useState(initialItems);

    const toggleFilters = () => {
        if(showFilterPresets) setShowFilterPresets(false);
        else setShowFilterPresets(true);
    };

    const render_dashboard_table_rows = (itemsList) => {
        return itemsList.map((item) => {
            const descTags = item.itemDescription.map((descTag) => {
                return (<div key={descTag}>{descTag}</div>);
            })

            return (
                <tr key={item.itemId} className="dashboard_table_row" style={{textAlign:"center"}}>
                    <td style={{border: "2px solid black", fontWeight:"bolder"}}>{item.itemName}</td>
                    <td style={{border: "2px solid black"}}>{item.itemId}</td>
                    <td style={{border: "2px solid black"}}>{item.itemQuantity}</td>
                    <td style={{border: "2px solid black"}}>{descTags}</td>
                </tr>
            );
        });
    }

    const filter_iname_search = (iname, itemList, updatedList) => {
        // let matches = /\d/.test(iname);
        let matches = /^[a-z]+$/i.test(iname);
        if(!matches) return 1;

        let query = iname.split(" ");
        for(let j=0; j<query.length; j++) {
            let search_item = query[j].toLowerCase();

            for(let i=0; i<itemList.length; i++) {
                if(itemList[i].itemName.toLowerCase().includes(search_item) && updatedList.indexOf(itemList[i]) === -1) {
                    updatedList.push(itemList[i]);
                }
            }
        }

        return 0;        
    };

    const filter_iqty_search = (iqty, updatedList) => {
        let matches = /^[0-9]+$/.test(iqty);
        if(!matches) return 1;
    
        //Enter error check for invalid input (not a number, etc)
        let target_num = Number(iqty);
        return updatedList.filter(item => {
            return item.itemQuantity >= target_num;
        });        
    };

    const filter_idesc_search = (idesc, itemList, updatedList) => {
        // let matches = /\d/.test(idesc);
        let matches = /^[a-z\s]+$/i.test(idesc);
        if(!matches) return 1;
        
        let query = idesc.split(" ");
        for(let i=0; i<itemList.length; i++) {
            let tag_list = itemList[i].itemDescription;
            for(let j=0; j<tag_list.length; j++) {
                let tag = tag_list[j].toLowerCase();

                for(let k=0; k<query.length; k++) {
                    let query_item = query[k].toLowerCase();
                    if(tag.includes(query_item)) {
                        j = tag_list.length;
                        if(updatedList.indexOf(itemList[i]) === -1) {
                            updatedList.push(itemList[i]);
                        }

                        break;
                    }
                }
            }
        }

        return 0;
    };

    let error = false;
    const itemSearch = (name, qty, desc) => {
        let invalid = 0;
        let emptySearch = false;
        let new_items = [];
        if(name !== "") {
            invalid += filter_iname_search(name, initialItems, new_items);
            // console.log("name search invalid: " + invalid);
            emptySearch = true;
        }

        if(desc !== "") {
            invalid += filter_idesc_search(desc, initialItems, new_items);
            // console.log("desc search invalid: " + invalid);
            emptySearch = true;
        }

        if(qty !== "") {
            new_items = filter_iqty_search(qty, new_items);
            // console.log("new items: " + new_items);
            emptySearch = true;
        }

        if(emptySearch === false) {
            setItems(initialItems);
        } else if(new_items === 1 || invalid > 0) {
            alert("Invalid Search");
        } else {
            setItems(new_items);
        }
    };

    const renderedList = render_dashboard_table_rows(items);
    return (<div style={{fontSize: "20px"}}>
        <DashboardMain toggleFilters={toggleFilters} />
        {showFilterPresets && <DashboardFilters itemSearch={itemSearch}/>}

        <div>
            <div className="inline_element dashboard_matches_title">Matches: </div> {(error === false) && renderedList.length} 
            {error && <span>"Please use the search filters properly"</span>}
            <br />
            <table id="dashboard_table" style={{width:"60%", margin:"1% 20%", border:"1px solid black", fontSize:"25px"}}>
                <thead>
                    <tr style={{fontWeight:"bold", fontSize:"30px", backgroundColor:"lightgrey"}}>
                        <th>Item Name</th>
                        <th>Item ID</th>
                        <th>Quantity</th>
                        <th>Description Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedList}
                </tbody>
            </table>
        </div>
    </div>);
}

export default DashboardPage;