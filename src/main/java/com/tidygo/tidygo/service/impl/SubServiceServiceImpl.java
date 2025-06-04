package com.tidygo.tidygo.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tidygo.tidygo.mapper.SubServiceMapper;
import com.tidygo.tidygo.repository.SubServiceRepository;
import com.tidygo.tidygo.response.SubServiceResponse;
import com.tidygo.tidygo.service.ISubServiceService;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class SubServiceServiceImpl implements ISubServiceService {

    final SubServiceRepository subServiceRepository;
    final SubServiceMapper subServiceMapper;

    @Override
    public List<SubServiceResponse> getAllSubServices() {
        return subServiceMapper.toSubServiceResponse(subServiceRepository.findAll());
    }

    @Override
    public List<SubServiceResponse> getSubServicesByServiceId(Long serviceId) {
        return subServiceMapper.toSubServiceResponse(subServiceRepository.findByServiceId(serviceId));
    }

}
