from flask_restful import Api
from flask import Flask
from Module.Indicators import *
from Routes.BacktestController import BacktestController, BacktestTester
from Routes.TradeController import TradeController
from Routes.MembershipController import MembershipController, MemberLoginController

app = Flask(__name__)
api = Api(app)

api.add_resource(
    BacktestController,
    '/backtest',
    )

api.add_resource(
    TradeController,
    '/trade',
    )

api.add_resource(
    MembershipController,
    '/membership',
)

api.add_resource(
    MemberLoginController,
    '/login',
)

if __name__ == '__main__':
    app.run(debug=True)
