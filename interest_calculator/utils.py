
def get_monthly_returns(initial_deposit, monthly_deposit, monthly_interest_rate, months):
    '''
    Calculate interest returns for each month
    '''
    initial_deposit = float(initial_deposit)
    monthly_deposit = float(monthly_deposit)
    monthly_interest_rate = float(monthly_interest_rate) / 100

    res = [initial_deposit]

    cur_balance = initial_deposit
    for month in range(1, months + 1):
        # Interest formula only applied for current balance
        cur_return = cur_balance * (1 + monthly_interest_rate)
        # Monthly deposit will only give an investment return on the next month
        cur_balance = cur_return + monthly_deposit
        res.append(round(cur_balance, 2))

    return res


def get_yearly_returns(initial_deposit, monthly_deposit, monthly_interest_rate, years):
    '''
    Calculate interest returns for each year
    '''
    initial_deposit = float(initial_deposit)
    monthly_deposit = float(monthly_deposit)
    monthly_interest_rate = float(monthly_interest_rate) / 100

    res = [initial_deposit]

    cur_balance = initial_deposit
    for month in range(1, years*12 + 1):
        # Interest formula only applied for current balance
        cur_return = cur_balance * (1 + monthly_interest_rate)
        # Monthly deposit will only give an investment return on the next month
        cur_balance = cur_return + monthly_deposit
        if month % 12 == 0:
            res.append(round(cur_balance, 2))

    return res


def geometric_formula(initial_deposit, monthly_deposit, monthly_interest_rate, months):
    '''
    Calculate interest return at a single point in time in the future based on geometric_formula
    '''
    initial_deposit = float(initial_deposit)
    monthly_deposit = float(monthly_deposit)
    monthly_interest_rate = float(monthly_interest_rate) / 100

    geometric_interest = monthly_deposit * (((1 + monthly_interest_rate)**months) - 1)/monthly_interest_rate

    initial_interest = initial_deposit * ((1 + monthly_interest_rate)**months)

    return geometric_interest + initial_interest
