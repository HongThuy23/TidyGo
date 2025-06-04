package com.tidygo.tidygo.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.tidygo.tidygo.entity.Account;
import com.tidygo.tidygo.response.AccountResponse;

@Mapper(componentModel = "spring")
public interface AccountMapper {

    @Mapping(target = "id", source = "id")
    @Mapping(target = "username", source = "username")
    @Mapping(target = "email", source = "email")
    @Mapping(target = "phoneNumber", source = "phoneNumber")
    @Mapping(target = "dob", source = "dob")
    @Mapping(target = "fullName", expression = "java(account.getLastName() + \" \" + account.getFirstName())")
    @Mapping(target = "avatar", source = "avatar")
    @Mapping(target = "createdAt", source = "createdAt")
    @Mapping(target = "updatedAt", source = "updatedAt")
    @Mapping(target = "gender", source = "gender")
    @Mapping(target = "roleName", source = "role.name")
    @Mapping(target = "status", source = "status")
    AccountResponse toAccountResponse(Account account);

    List<AccountResponse> toAccountResponse(List<Account> account);
}
