
def get_monthly_returns(principal_deposit, monthly_deposit, monthly_interest_rate, months):
    '''
    Calculate interest returns for each month
    '''
    principal_deposit = float(principal_deposit)
    monthly_deposit = float(monthly_deposit)
    monthly_interest_rate = float(monthly_interest_rate) / 100

    res = [principal_deposit]

    for month in range(1, months + 1):
        cur_balance = res[-1]
        # Interest formula only applied for current balance
        cur_return = cur_balance * (1 + monthly_interest_rate)
        # Monthly deposit will only give a investment return on the next month
        res.append(cur_return + monthly_deposit)

    return res
