package com.tidygo.tidygo.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tidygo.tidygo.entity.Account;
import com.tidygo.tidygo.entity.enums.AccountStatus;
import com.tidygo.tidygo.mapper.AccountMapper;
import com.tidygo.tidygo.repository.AccountRepository;
import com.tidygo.tidygo.response.AccountResponse;
import com.tidygo.tidygo.service.IAccountService;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AccountServiceImpl implements IAccountService {

    final AccountRepository accountRepository;
    final AccountMapper accountMapper;

    @Override
    public List<AccountResponse> getAllAccounts() {
        return accountMapper.toAccountResponse(accountRepository.findAll());
    }

    @Override
    public Account disableAccount(Long id) {
        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Account not found with id: " + id));
        account.setStatus(AccountStatus.INACTIVE);
        return accountRepository.save(account);
    }

    @Override
    public Account enableAccount(Long id) {
        Account account = accountRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Account not found with id: " + id));
        account.setStatus(AccountStatus.ACTIVE);
        return accountRepository.save(account);
    }

}
