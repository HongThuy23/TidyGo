package com.tidygo.tidygo.service;

import java.util.List;

import com.tidygo.tidygo.entity.Account;
import com.tidygo.tidygo.response.AccountResponse;

public interface IAccountService {
    List<AccountResponse> getAllAccounts();

    Account disableAccount(Long id);

    Account enableAccount(Long id);
}
