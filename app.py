# # import pickle
# # import pandas as pd
# # from flask import Flask, jsonify
# # from flask_cors import CORS

# # app = Flask(__name__)

# # # CORS configuration looks good, but let's make it simpler
# # CORS(app, origins="http://localhost:5173")

# # # Move data loading outside of route to catch errors early
# # try:
# #     with open("monthly_sales.pkl", "rb") as file:
# #         data = pickle.load(file)
# #     # Convert to DataFrame immediately if it's not already one
# #     if not isinstance(data, pd.DataFrame):
# #         data = pd.DataFrame(data)
# # except FileNotFoundError:
# #     print("Error: monthly_sales.pkl file not found")
# #     data = None
# # except Exception as e:
# #     print(f"Error loading data: {str(e)}")
# #     data = None

# # @app.route("/sales_data", methods=["GET"])
# # def get_sales_data():
# #     try:
# #         if data is None:
# #             return jsonify({"error": "Data not available"}), 500
            
# #         # Verify columns exist
# #         if 'month' not in data.columns or 'price' not in data.columns:
# #             return jsonify({"error": "Required columns not found in dataset"}), 500
            
# #         sales_data = data[['month', 'price']].to_dict(orient="records")
# #         return jsonify(sales_data)
        
# #     except Exception as e:
# #         print(f"Error in get_sales_data: {str(e)}")
# #         return jsonify({"error": str(e)}), 500

# # if __name__ == "__main__":
# #     app.run(debug=True)


# # import pickle
# # import pandas as pd
# # from flask import Flask, jsonify
# # from flask_cors import CORS

# # app = Flask(__name__)
# # CORS(app, origins="http://localhost:5173")

# # @app.route("/sales_data", methods=["GET"])
# # def get_sales_data():
# #     try:
# #         # Load and verify data
# #         with open("monthly_sales.pkl", "rb") as file:
# #             data = pickle.load(file)
        
# #         # Convert to DataFrame if it's not already
# #         if not isinstance(data, pd.DataFrame):
# #             data = pd.DataFrame(data)
        
# #         # Verify required columns exist
# #         if 'YearMonth' not in data.columns or 'TotalSales' not in data.columns:
# #             return jsonify({"error": "Required columns missing from data"}), 500
        
# #         # Convert to list of dictionaries
# #         sales_data = data[['YearMonth', 'TotalSales']].to_dict(orient="records")
        
# #         # Verify the output format
# #         print("Output data format:", sales_data[:2])  # Print first two records
        
# #         return jsonify(sales_data)
    
# #     except FileNotFoundError:
# #         return jsonify({"error": "Data file not found"}), 500
# #     except Exception as e:
# #         print(f"Error processing data: {str(e)}")
# #         return jsonify({"error": "Internal server error"}), 500

# # if __name__ == "__main__":
# #     app.run(debug=True)

# import pickle
# import pandas as pd
# from flask import Flask, jsonify
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app, origins="http://localhost:5173")

# @app.route("/sales_data", methods=["GET"])
# def get_sales_data():
#     try:
#         # Load and verify data
#         with open("monthly_sales.pkl", "rb") as file:
#             data = pickle.load(file)
        
#         # Convert to DataFrame if it's not already
#         if not isinstance(data, pd.DataFrame):
#             data = pd.DataFrame(data)

#         # Verify required columns exist
#         if 'YearMonth' not in data.columns or 'TotalSales' not in data.columns:
#             return jsonify({"error": "Required columns missing from data"}), 500

#         # Convert `YearMonth` Period to string format (YYYY-MM)
#         data['YearMonth'] = data['YearMonth'].astype(str)

#         # Convert to list of dictionaries
#         sales_data = data[['YearMonth', 'TotalSales']].to_dict(orient="records")
        
#         # Verify output format
#         print("Output Data Format:", sales_data[:2])  # Print first two records
        
#         return jsonify(sales_data)

#     except FileNotFoundError:
#         return jsonify({"error": "Data file not found"}), 500
#     except Exception as e:
#         print(f"Error processing data: {str(e)}")
#         return jsonify({"error": "Internal server error"}), 500



#     try:
#         # Load and verify data
#         with open("monthly_sales.pkl", "rb") as file:
#             data = pickle.load(file)
        
#         # Convert to DataFrame if it's not already
#         if not isinstance(data, pd.DataFrame):
#             data = pd.DataFrame(data)

#         # Verify required columns exist
#         if 'Description' not in data.columns or 'Quantity' not in data.columns:
#             return jsonify({"error": "Required columns missing from data"}), 500

#         # Convert to list of dictionaries
#         sales_data = data[['Description', 'Quantity']].to_dict(orient="records")
        
#         return jsonify(sales_data)

#     except FileNotFoundError:
#         return jsonify({"error": "Data file not found"}), 500
#     except Exception as e:
#         print(f"Error processing data: {str(e)}")
#         return jsonify({"error": "Internal server error"}), 500
    

# if __name__ == "__main__":
#     app.run(debug=True,port=3000)


import pickle
import pandas as pd
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:5173")

@app.route("/sales_data", methods=["GET"])
def get_sales_data():
    try:
        # Load and verify data
        with open("monthly_sales.pkl", "rb") as file:
            data = pickle.load(file)
        
        # Convert to DataFrame if it's not already
        if not isinstance(data, pd.DataFrame):
            data = pd.DataFrame(data)

        # Verify required columns exist
        if 'YearMonth' not in data.columns or 'TotalSales' not in data.columns:
            return jsonify({"error": "Required columns missing from data"}), 500

        # Convert `YearMonth` Period to string format (YYYY-MM)
        data['YearMonth'] = data['YearMonth'].astype(str)

        # Convert to list of dictionaries
        sales_data = data[['YearMonth', 'TotalSales']].to_dict(orient="records")
        
        return jsonify(sales_data)

    except FileNotFoundError:
        return jsonify({"error": "Data file not found"}), 500
    except Exception as e:
        print(f"Error processing data: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500



@app.route("/category_data", methods=["GET"])
def get_category_data():
    try:
        # Load and verify data
        with open("online_retail_data.pkl", "rb") as file:
            data = pickle.load(file)
            print(data)
        
        # Convert to DataFrame if it's not already
        if not isinstance(data, pd.DataFrame):
            data = pd.DataFrame(data)

        # Verify required columns exist
        if 'Description' not in data.columns or 'Quantity' not in data.columns:
            return jsonify({"error": "Required columns missing from data"}), 500

        # Group by Description and sum Quantities
        category_data = data.groupby('Description')['Quantity'].sum().reset_index()

        # Get top 10 categories by Quantity
        top_categories = category_data.nlargest(10, 'Quantity')

        # Convert to list of dictionaries
        category_data = top_categories.to_dict(orient="records")
        
        return jsonify(category_data)

    except FileNotFoundError:
        return jsonify({"error": "Data file not found"}), 500
    except Exception as e:
        print(f"Error processing data: {str(e)}")
        return jsonify({"error": "Internal server error"}), 500  
    
from flask import jsonify
import pandas as pd
import pickle
import os

# @app.route("/transaction_data", methods=["GET"])
# def get_transaction_data():
#     try:
#         with open("invoice_data(1).pkl", "rb") as file:
#             data = pickle.load(file)

#         if not isinstance(data, pd.DataFrame):
#             data = pd.DataFrame(data)

#         required_cols = ['Date', 'Net Amount', 'Payment Mode']
#         if not all(col in data.columns for col in required_cols):
#             return jsonify({"error": "Required columns missing from data"}), 500

#         # Drop missing values
#         df = data[required_cols].dropna()

#         # Convert date to proper format
#         df['date'] = pd.to_datetime(df['Date']).dt.date.astype(str)

#         # Clean up and rename columns
#         df = df.rename(columns={
#             'Net Amount': 'amount',
#             'Payment Mode': 'payment_mode'
#         })[['date', 'amount', 'payment_mode']]

#         # Format amount as currency
#         df['amount'] = df['amount'].round(2).apply(lambda x: f"${x:,.2f}")

#         # Sort and take latest 20
#         df = df.sort_values(by='date', ascending=False).head(20)

#         return jsonify(df.to_dict(orient="records"))

#     except FileNotFoundError:
#         return jsonify({"error": "Data file not found"}), 500
#     except Exception as e:
#         print(f"Error: {str(e)}")
#         return jsonify({"error": "Internal server error"}), 500


@app.route("/transaction_data")
def transaction_data():
    try:
        # Try to use a simple JSON file instead of problematic pickle
        json_path = os.path.join(os.getcwd(), "test_transactions.json")
        
        if os.path.exists(json_path):
            # Use the test JSON file if it exists (created by debug script)
            with open(json_path, "r") as f:
                transactions = json.load(f)
            print(f"Loaded {len(transactions)} transactions from test_transactions.json")
        else:
            # Create hardcoded test data as fallback
            transactions = [
                {"date": "2023-01-01", "payment_mode": "Credit Card", "amount": 100.0},
                {"date": "2023-01-02", "payment_mode": "Cash", "amount": 75.50},
                {"date": "2023-01-03", "payment_mode": "Bank Transfer", "amount": 250.0}
            ]
            print("Using hardcoded test data")
            
        return jsonify(transactions)
        
    except Exception as e:
        print(f"Error in /transaction_data simplified route: {str(e)}")
        return jsonify({"message": "Server Error", "error": str(e)}), 500

# @app.route("/revenue_data", methods=["GET"])
# def get_sales_data():
#     try:
#         # Load and verify data
#         with open("sales_forecast.pkl", "rb") as file:
#             data = pickle.load(file)
        
#         # Convert to DataFrame if it's not already
#         if not isinstance(data, pd.DataFrame):
#             data = pd.DataFrame(data)

#         # Verify required columns exist
#         if 'ds' not in data.columns or 'yhat' not in data.columns:
#             return jsonify({"error": "Required columns missing from data"}), 500

#         # Convert `YearMonth` Period to string format (YYYY-MM)
#         data['ds'] = data['ds'].astype(str)

#         # Convert to list of dictionaries
#         sales_data = data[['ds', 'yhat']].to_dict(orient="records")
        
#         return jsonify(sales_data)

#     except FileNotFoundError:
#         return jsonify({"error": "Data file not found"}), 500
#     except Exception as e:
#         print(f"Error processing data: {str(e)}")
#         return jsonify({"error": "Internal server error"}), 500
    
# with open("sales_forecast.pkl", "rb") as file:
#     data = pickle.load(file)

# print(data)

data = pd.read_pickle("C://Users//anura//Desktop//WEBDEVELOPMENT//simren//invoice_data (1).pkl")
print(type(data))  # should be dict or list

# If it's a list of dicts
df = pd.DataFrame(data)
print(df.head())

if __name__ == "__main__":
    app.run(debug=True, port=3000)